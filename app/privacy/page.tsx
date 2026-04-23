import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Surfr privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="pb-20 pt-32 md:pt-40">
      <div className="mx-auto max-w-[800px] px-6 md:px-8">
        <h1 className="text-3xl md:text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-[var(--color-muted)]">
          Last updated: Nov 13, 2025
        </p>

        <p className="mt-6 text-sm leading-relaxed text-[var(--color-secondary)]">
          At Surfr B.V. (&quot;Surfr&quot;, &quot;we&quot;, &quot;our&quot; or
          &quot;us&quot;), we are committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, share, and protect
          personal information of users (&quot;you&quot;, &quot;your&quot;) who
          use the Surfr mobile app and web services (collectively, the
          &quot;Services&quot;), including the associated online shop.
        </p>

        <div className="mt-12 space-y-10 text-[var(--color-body)]">
          {/* ── 1. Information We Collect ── */}
          <section>
            <h2 className="text-xl">1. Information We Collect</h2>

            <h3 className="mt-5 text-base font-semibold">
              Account and Profile Information
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-secondary)]">
              When you create a Surfr account, we collect the following
              information:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-secondary)]">
              <li>
                <strong>Required:</strong> First and last name, email address
              </li>
              <li>
                <strong>Optional:</strong> gender, date of birth, nationality,
                profile picture, home spot
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-secondary)]">
              In addition, you can complete your Surfr Profile by adding more
              information:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-secondary)]">
              <li>
                <strong>Optional:</strong> Profile banner image, username,
                language, leaderboard preference, preferred spot, skill level,
                minimum jump height, preferred units (metric/imperial), social
                media handles (Instagram, Facebook), gear details (e.g., kites
                size and brand used).
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-secondary)]">
              Some profile fields are essential for app functionality (e.g.
              gender for leaderboard grouping), while others are optional to
              enhance personalization.
            </p>

            <h3 className="mt-5 text-base font-semibold">
              Session and Device Data
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-secondary)]">
              When you use Surfr to track a session, we collect certain
              information from your device. This includes:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-secondary)]">
              <li>
                <strong>GPS location data</strong> &ndash; We collect your
                real-time and recorded location data to map your sessions and
                support features like Live tracking. We only access this data if
                you&apos;ve granted permission on your device (iOS, Android,
                watchOS, Wear OS, Garmin).
              </li>
              <li>
                <strong>Health and fitness data</strong> &ndash; With your
                consent, we access health data from connected apps (such as
                Apple Health or Google Fit), including heart rate. We use this to
                display insights during your session (like heart rate zones).
                This data is stored securely with your session.
              </li>
              <li>
                <strong>Sensor data (accelerometer and gyroscope)</strong>{" "}
                &ndash; We temporarily use motion sensor data during your
                sessions to detect jumps and improve accuracy. This data is
                stored <strong>locally on your device</strong> and automatically
                deleted after 30 days.
              </li>
              <li>
                <strong>Jump metrics and session statistics</strong> &ndash; We
                collect performance data such as jump height, airtime, and speed
                to help analyze and improve your sessions.
              </li>
              <li>
                <strong>Device settings and system data</strong> &ndash; We
                collect limited device information (e.g. version type,
                calibrated, device information) in order to provide better
                support.
              </li>
            </ul>

            <h3 className="mt-5 text-base font-semibold">
              Content You Upload
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-secondary)]">
              You may choose to upload: Profile pictures, session photos,
              comments, likes, spot reviews and spot requests. These are shared
              with other users only if you choose to publish them.
            </p>

            <h3 className="mt-5 text-base font-semibold">
              E-commerce Information
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-secondary)]">
              When placing orders in our shop, we collect: Name, shipping
              address, and email. We do <strong>not</strong> store payment
              information. Payments are processed by <strong>Stripe</strong>, and
              shipping is handled by <strong>Sendcloud</strong>.
            </p>
          </section>

          {/* ── 2. How We Use Your Information ── */}
          <section>
            <h2 className="text-xl">2. How We Use Your Information</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
              We process your personal data only when there is a lawful basis to
              do so under the GDPR, and we use it in the following ways:
            </p>

            <h3 className="mt-5 text-base font-semibold">
              To Provide and Improve the Services
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-secondary)]">
              We use your data to operate, personalize, and improve our app.
              This includes:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-secondary)]">
              <li>
                <strong>Recording and analyzing your sessions:</strong> We use
                GPS, accelerometer, and other sensor data to measure performance
                metrics such as jump height, airtime, distance, and speed. This
                helps you track your progression and analyze past efforts.
              </li>
              <li>
                <strong>In-App and Public Leaderboards:</strong> Your session
                data &ndash; including profile name, profile picture, and
                performance metrics (e.g., jump height) &ndash; may be used to
                create and display rankings in the app and on digital displays
                or webpages showcasing top-performing users (e.g., by gender,
                discipline, or spot).{" "}
                <em>
                  If you do not wish to appear in public leaderboards, you can
                  opt out at any time in the app: Profile &gt; Settings &gt;
                  Privacy &gt; Leaderboard Visibility.
                </em>
              </li>
              <li>
                <strong>Improving safety features:</strong> We use real-time
                location and session data to support live tracking and recovery
                navigation during your sessions. You decide who can see your
                live location: No One, Followers, or Everyone. For your safety,
                the default setting is Followers.{" "}
                <em>
                  You can change this anytime in the app: Profile &gt; Settings
                  &gt; Privacy &gt; Live Location.
                </em>
              </li>
            </ul>

            <h3 className="mt-5 text-base font-semibold">
              To Power Community and Social Features
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-secondary)]">
              Surfr is built to support a passionate community of water sports
              athletes. We use your information to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-secondary)]">
              <li>
                <strong>Enable interaction with other users:</strong> You can
                follow others, view their sessions, like their activity, and
                comment (depending on your privacy settings).
              </li>
              <li>
                <strong>Make profiles and sessions discoverable:</strong> Others
                may see your profile name, photo, and PR stats (e.g. highest
                jump) and (live) sessions in the Sessions and Live overview. By
                default, your profile is public.{" "}
                <em>
                  If you wish your profile and sessions to be private, you can
                  change this at any time in the app: Profile &gt; Settings &gt;
                  Privacy &gt; Profile.
                </em>
              </li>
              <li>
                <strong>Share user-generated content:</strong> Photos, reviews,
                and session media that you choose to publish can be seen by other
                users and may appear on spot pages in and outside of the app.
              </li>
              <li>
                <strong>
                  Display leaderboard data on public spot dashboards and the
                  Surfr Discover webpage:
                </strong>{" "}
                We may showcase leaderboards on public digital displays and on
                our public Discover webpage. These displays may include your
                username, profile photo, performance metrics, and session
                location.{" "}
                <em>
                  You can control whether you appear in these rankings via:
                  Profile &gt; Settings &gt; Privacy &gt; Leaderboard
                  Visibility.
                </em>
              </li>
            </ul>

            <h3 className="mt-5 text-base font-semibold">
              To Support Communications and Customer Service
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-secondary)]">
              We use your information to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-secondary)]">
              <li>
                <strong>Send out notifications</strong> about sessions, such as
                whenever you start or end a session.
              </li>
              <li>
                <strong>Send service communications</strong>, such as login
                codes and newsletters.
              </li>
              <li>
                <strong>Respond to support requests</strong>, including
                troubleshooting or technical assistance.
              </li>
              <li>
                <strong>Send marketing communications</strong> (e.g., product
                updates or promotional offers). You can opt out at any time.
              </li>
            </ul>

            <h3 className="mt-5 text-base font-semibold">
              To Fulfill Orders in the Surfr Shop
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-secondary)]">
              When you place an order via our online shop, we process your
              personal data to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-secondary)]">
              <li>
                Handle <strong>order confirmation</strong>,{" "}
                <strong>shipping</strong>, and{" "}
                <strong>customer support</strong>;
              </li>
              <li>
                Work with third parties like <strong>Stripe</strong> (payment
                processing) and <strong>Sendcloud</strong> (logistics).
              </li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
              We do <strong>not</strong> store your payment details.
            </p>

            <h3 className="mt-5 text-base font-semibold">
              To Analyze, Research, and Improve the Services
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-secondary)]">
              We use aggregated and anonymized data to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-secondary)]">
              <li>Understand feature usage;</li>
              <li>Improve app performance and stability;</li>
              <li>Develop new features and insights;</li>
              <li>
                Train algorithms (e.g., for jump detection accuracy).
              </li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
              This supports continuous improvement and innovation, in line with
              data minimization principles.
            </p>
          </section>

          {/* ── 3. How We Share Your Information ── */}
          <section>
            <h2 className="text-xl">3. How We Share Your Information</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
              Surfr does <strong>not sell or commercially share</strong> your
              personal data.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
              We only share information when necessary:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-secondary)]">
              <li>
                With <strong>Google Cloud</strong>, for secure hosting and data
                storage (read more below in Data Hosting and Security)
              </li>
              <li>
                With <strong>Stripe</strong>, to process shop payments
              </li>
              <li>
                With <strong>Sendcloud</strong>, to manage shipping and customs
              </li>
              <li>
                With third-party service providers (IT or support services),
                under strict confidentiality agreements
              </li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
              Data is not stored outside the EU unless adequate safeguards are in
              place.
            </p>

            <h3 className="mt-5 text-base font-semibold">
              Publicly Available Information
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-secondary)]">
              By default, certain parts of your Surfr profile and session data
              may be visible to other users and, in some cases, to the general
              public. When you create an account and begin using the Surfr app,
              the following data may be public unless you adjust your privacy
              settings:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-secondary)]">
              <li>
                Your <strong>username</strong>,{" "}
                <strong>profile picture</strong>, and selected{" "}
                <strong>profile details</strong> (e.g., nationality, preferred
                discipline)
              </li>
              <li>
                <strong>Session statistics</strong>, such as jump height, speed,
                airtime, and distance
              </li>
              <li>
                <strong>Uploaded photos</strong>, reviews, and spot information
                you choose to publish
              </li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
              This information may appear:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-secondary)]">
              <li>In the app (e.g., leaderboards, spot pages)</li>
              <li>On Surfr managed website (e.g., Discover)</li>
              <li>
                On <strong>public digital displays</strong> at affiliated surf
                locations (e.g., Spot Dashboards)
              </li>
              <li>
                In <strong>search engine results</strong>, where technically
                possible
              </li>
            </ul>
          </section>

          {/* ── 4. Privacy Controls and Visibility Settings ── */}
          <section>
            <h2 className="text-xl">
              4. Privacy Controls and Visibility Settings
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
              Surfr provides a range of privacy settings to help you manage how
              your personal data and session information are shared. These
              settings are available to all users, regardless of their
              geographic location.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
              You can adjust your privacy preferences directly in the app:{" "}
              <strong>Profile &gt; Settings &gt; Privacy</strong>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
              The available options include:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-secondary)]">
              <li>
                <strong>Profile visibility:</strong> Choose whether your profile
                is visible to <em>everyone</em> or <em>followers only</em> (via
                follow requests).
              </li>
              <li>
                <strong>Leaderboard participation:</strong> Opt in or out of
                public leaderboards.
              </li>
              <li>
                <strong>Live location sharing:</strong> Share your real-time
                location with <em>everyone</em>, <em>followers only</em>, or{" "}
                <em>no one</em>.
              </li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
              You remain in full control of what you share and with whom.
              Privacy settings can be changed at any time.
            </p>
          </section>

          {/* ── 5. Your Rights and Choices ── */}
          <section>
            <h2 className="text-xl">5. Your Rights and Choices</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
              You have full control over your data and can:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-secondary)]">
              <li>
                View, update, or delete your profile data at any time via the
                app
              </li>
              <li>Revoke location permissions or disable GPS tracking</li>
              <li>Remove uploaded content</li>
              <li>
                Request a full data export or account deletion by contacting{" "}
                <a
                  href="mailto:privacy@thesurfr.app"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  privacy@thesurfr.app
                </a>
              </li>
              <li>Disable social media integrations at any time</li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-secondary)]">
              You also have rights under GDPR, including:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-secondary)]">
              <li>Right to access</li>
              <li>Right to correction</li>
              <li>Right to erasure</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>
          </section>

          {/* ── 6. Data Retention ── */}
          <section>
            <h2 className="text-xl">6. Data Retention</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-secondary)]">
              <li>
                We retain data as long as needed to provide our services.
              </li>
              <li>
                Account data is deleted within <strong>30 days</strong> after a
                deletion request.
              </li>
              <li>
                Uploaded session content remains until manually deleted by the
                user.
              </li>
              <li>
                Accelerometer/gyroscope data is only stored temporarily on your
                device and auto-deletes after <strong>30 days</strong>.
              </li>
            </ul>
          </section>

          {/* ── 7. Data Hosting and Security ── */}
          <section>
            <h2 className="text-xl">7. Data Hosting and Security</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
              All personal data is stored exclusively in{" "}
              <strong>
                Google Cloud regions located in the European Union
              </strong>
              . While network traffic may pass through international routing
              infrastructure (e.g., if you access from outside Europe), no
              personal data is stored or processed outside the EU. Google Cloud
              meets high security and GDPR compliance standards.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
              Surfr employs:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-secondary)]">
              <li>Secure transmission (HTTPS)</li>
              <li>Access control and logging</li>
              <li>
                Best practices for mobile data handling (e.g., wake locks,
                battery optimization settings)
              </li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
              Only authorized personnel have access to your data.
            </p>
          </section>

          {/* ── 8. Permissions and Device Access ── */}
          <section>
            <h2 className="text-xl">8. Permissions and Device Access</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
              To function correctly, the Surfr app may request:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--color-secondary)]">
              <li>
                <strong>Location access (while using the app)</strong> &ndash;
                for live GPS tracking during sessions
              </li>
              <li>
                <strong>Notification permission</strong> &ndash; to share
                notifications
              </li>
              <li>
                <strong>Camera</strong> &ndash; to take session photos or
                profile images
              </li>
              <li>
                <strong>Storage access</strong> &ndash; for temporary sensor
                data
              </li>
              <li>
                <strong>Battery optimization override</strong> &ndash; to keep
                recording during sleep mode
              </li>
              <li>
                <strong>Phone state</strong> &ndash; to monitor device battery
                and disk space
              </li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
              You can enable or revoke permissions at any time via your device
              settings.
            </p>
          </section>

          {/* ── 9. Use by Minors ── */}
          <section>
            <h2 className="text-xl">9. Use by Minors</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
              Surfr is designed for users aged 16 and older. If you are under
              16, please only use the app with permission from a parent or
              guardian. We do not intentionally collect personal information from
              children. If we become aware that data from a user under 16 was
              collected without proper consent, we will take steps to delete it.
            </p>
          </section>

          {/* ── 10. International Users ── */}
          <section>
            <h2 className="text-xl">10. International Users</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
              While Surfr is based in the Netherlands, our infrastructure may
              process data globally. In such cases, we ensure appropriate legal
              safeguards (e.g., Standard Contractual Clauses).
            </p>
          </section>

          {/* ── 11. Changes to This Policy ── */}
          <section>
            <h2 className="text-xl">11. Changes to This Policy</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
              We may update this policy from time to time. Changes will be
              posted within the app or at{" "}
              <a
                href="https://thesurfr.app/privacy"
                className="text-[var(--color-primary)] hover:underline"
              >
                thesurfr.app/privacy
              </a>
              . Continued use of our Services means you accept the updated
              terms.
            </p>
          </section>

          {/* ── 12. Contact ── */}
          <section>
            <h2 className="text-xl">12. Contact</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-secondary)]">
              For questions, requests, or concerns, contact us at{" "}
              <a
                href="mailto:privacy@thesurfr.app"
                className="text-[var(--color-primary)] hover:underline"
              >
                privacy@thesurfr.app
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
