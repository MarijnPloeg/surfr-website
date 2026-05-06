import { NextRequest, NextResponse } from "next/server";

// BFF for the Surfr leaderboard API. The access token is server-only and
// injected here, so the client never sees it. Whitelisted query params
// only — unknown params are dropped to keep the surface intentional.
//
// Backend reference: docs/leaderboard-backend-spec.md (response shapes)
//                    + the partner integration guide from the backend team.

const SURFR_API_BASE =
  process.env.SURFR_API_BASE_URL ?? "https://api.thesurfr.app";

const ALLOWED_PARAMS = new Set([
  "spotid",
  "additionalSpotsId",
  "countryid",
  "continentid",
  "gender",
  "ageBracket",
  "skillLevel",
  "kitesize",
  "kitesizeid",
  "kitebrandid",
  "kitemodelid",
  "boardtype",
  "customLimit",
  "limitresult",
  "from",
  "to",
  "type",
  "entriesPerUser",
  "aggregate",
  "sortOrder",
  "period",
]);

const CACHE_HEADER = "public, max-age=60, s-maxage=60, stale-while-revalidate=300";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const token = process.env.SURFR_API_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "Server misconfigured" },
      { status: 500 },
    );
  }

  const { path } = await params;
  const upstreamPath = path.map(encodeURIComponent).join("/");
  const url = new URL(`${SURFR_API_BASE}/leaderboards/${upstreamPath}`);

  url.searchParams.set("accesstoken", token);
  request.nextUrl.searchParams.forEach((value, key) => {
    if (ALLOWED_PARAMS.has(key)) {
      url.searchParams.set(key, value);
    }
  });

  try {
    const upstream = await fetch(url.toString(), {
      next: { revalidate: 60 },
    });

    if (upstream.status === 204) {
      return new NextResponse(null, {
        status: 204,
        headers: { "Cache-Control": CACHE_HEADER },
      });
    }

    if (!upstream.ok) {
      return NextResponse.json(
        { error: "Upstream error" },
        { status: upstream.status },
      );
    }

    const data = await upstream.json();
    return NextResponse.json(data, {
      headers: { "Cache-Control": CACHE_HEADER },
    });
  } catch {
    return NextResponse.json(
      { error: "Upstream unreachable" },
      { status: 502 },
    );
  }
}
