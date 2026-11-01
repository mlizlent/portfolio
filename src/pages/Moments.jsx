export default function Moments() {
  const photos = [
    "/build-from-here/002A0078~2.jpg",
    "/build-from-here/002A9648~2.jpg",
  ];
  return (
    <div className="home-page">
      <section className="section page-top">
      <h1>Moments</h1>
      <article style={{ marginTop: 24 }}>
        <h2>Graduation — Mount Kenya University</h2>
        <p className="muted">Bachelor of Technology in Computer and Electronic Systems</p>
        <p style={{ marginTop: 12, maxWidth: 720 }}>
          Graduating from Mount Kenya University with a Bachelor of Technology in
          Computer and Electronic Systems was the milestone that started my journey
          in technology. The course gave me a solid grounding in both software and
          the hardware and systems it runs on, and I carry that thinking into
          everything I build today. It was a day to thank the family, friends,
          and lecturers who supported me along the way, and to look ahead to
          what I'd build next.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            marginTop: 16,
          }}
        >
          <img
            src="/grad/IMG_8135.jpg"
            alt="Graduation"
            style={{ width: "100%", maxHeight: 260, borderRadius: 12, objectFit: "contain" }}
          />
        </div>
      </article>

      <hr style={{ border: "none", borderTop: "1px solid var(--border, #eee)", margin: "40px 0" }} />
      <article style={{ marginTop: 24 }}>
        <h2>Build From Here Conference</h2>
        <p className="muted">April 2036</p>
        <p style={{ marginTop: 12, maxWidth: 720 }}>
          Build From Here Conference marked a milestone for Zone01 Kisumu, as its
          first cohort of apprentices graduated. After a year of learning by
          building projects, reviewing each other's code, and solving problems as
          a team, the cohort stepped onto the stage as full-stack engineers ready
          for what comes next. Being part of this community has shaped how I work,
          and this day was a reminder of how far a group can go when everyone
          learns from one another.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            marginTop: 16,
          }}
        >
          {photos.map((src) => (
            <img
              key={src}
              src={src}
              alt="Build From Here Conference"
              style={{ width: "100%", maxHeight: 260, borderRadius: 12, objectFit: "contain" }}
            />
          ))}
        </div>
      </article>

      <hr style={{ border: "none", borderTop: "1px solid var(--border, #eee)", margin: "40px 0" }} />

      <article style={{ marginTop: 40 }}>
        <h2>Bitcoin Lightning Bootcamp</h2>
        <p className="muted">Zone01 Kisumu</p>
        <p style={{ marginTop: 12, maxWidth: 720 }}>
          For five days, Zone01 Kisumu hosted a Bitcoin Lightning Bootcamp where we
          learned how the Lightning Network works and how to build with it. We
          worked through how payment channels and invoices function, and how
          developers can add instant, low-fee payments to real applications. It
          strengthened my interest in building Lightning-based tools that fit
          local needs, especially across Africa, where cheap and fast payments
          matter most.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            marginTop: 16,
          }}
        >
          <img
            src="/bitcoin/7L6A0067~3.jpg"
            alt="Bitcoin Lightning Bootcamp"
            style={{ width: "100%", maxHeight: 260, borderRadius: 12, objectFit: "contain" }}
          />
        </div>
      </article>
      <hr style={{ border: "none", borderTop: "1px solid var(--border, #eee)", margin: "40px 0" }} />

      <article style={{ marginTop: 40 }}>
        <h2>GreenTech Hackathon 2026</h2>
        <p className="muted">RegenFeed</p>
        <p style={{ marginTop: 12, maxWidth: 720 }}>
          At the GreenTech Hackathon 2026, our team took on a problem that is easy
          to overlook: what happens to food waste. We built RegenFeed, a platform
          that turns waste from hotels and municipalities into animal feed and
          fertilizer through Black Soldier Fly farming, and connects buyers and
          collectors with simple mobile payments. It meant going from idea to a
          working, deployed product against the clock, and I learned a lot about
          building something practical for real needs alongside teammates who each
          brought a different strength.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            marginTop: 16,
          }}
        >
          <img
            src="/green/IMG_2348~2.JPG"
            alt="GreenTech Hackathon"
            style={{ width: "100%", maxHeight: 260, borderRadius: 12, objectFit: "contain" }}
          />
        </div>
      </article>

      <hr style={{ border: "none", borderTop: "1px solid var(--border, #eee)", margin: "40px 0" }} />

      <article style={{ marginTop: 40 }}>
        <h2>Tech Challenge Kenya — Judging</h2>
        <p className="muted">July 2026 · Maseno University</p>
        <p style={{ marginTop: 12, maxWidth: 720 }}>
          In July 2026, I served as a judge at Tech Challenge Kenya, held at
          Maseno University, where primary and secondary school students took on
          the challenge of surviving the storm. Over the course of the event, I
          judged more than 20 groups, looking at creativity, problem solving, and
          how well each team explained its ideas. It was inspiring to see young
          minds think practically about it, and just as rewarding to give each
          group feedback and encouragement before they left the stage.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            marginTop: 16,
          }}
        >
          <img
            src="/judge/DSC00845%20(1).jpg"
            alt="Tech Challenge Kenya"
            style={{ width: "100%", maxHeight: 260, borderRadius: 12, objectFit: "contain" }}
          />
          <img
            src="/judge/IMG-20260711-WA0120.jpg"
            alt="Tech Challenge Kenya"
            style={{ width: "100%", maxHeight: 260, borderRadius: 12, objectFit: "contain" }}
          />
        </div>
      </article>

      <hr style={{ border: "none", borderTop: "1px solid var(--border, #eee)", margin: "40px 0" }} />

      <article style={{ marginTop: 40 }}>
        <h2>Gopher Conference Africa</h2>
        <p className="muted">October 2026 · PrideInn Azure Hotel, Nairobi</p>
        <p style={{ marginTop: 12, maxWidth: 720 }}>
          In October 2026, I attended Gopher Conference Africa at PrideInn Azure
          Hotel in Nairobi, where Go developers from across Africa and abroad came
          together to share their knowledge. Go is one of the languages I build
          with most, so it was valuable to hear how other engineers use it in real
          systems and to meet people from the community behind it. I came away
          with new ideas and with connections I hope to keep building on.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            marginTop: 16,
          }}
        >
          <img
            src="/gopher/249A6056~2.jpg"
            alt="Gopher Conference Africa"
            style={{ width: "100%", maxHeight: 260, borderRadius: 12, objectFit: "contain" }}
          />
          <img
            src="/gopher/IMG-20261016-WA0067.jpg"
            alt="Gopher Conference Africa"
            style={{ width: "100%", maxHeight: 260, borderRadius: 12, objectFit: "contain" }}
          />
        </div>
      </article>

      <hr style={{ border: "none", borderTop: "1px solid var(--border, #eee)", margin: "40px 0" }} />

      <article style={{ marginTop: 40 }}>
        <h2>Impala Sanctuary Nature Walk</h2>
        <p className="muted">Kisumu</p>
        <p style={{ marginTop: 12, maxWidth: 720 }}>
          Long hours of coding can wear you down, so a fellow developer and I
          decided to break the routine with a nature walk at Impala Sanctuary in
          Kisumu. We left our laptops behind and spent the afternoon walking,
          talking, and taking in the scenery. We came back refreshed, with clearer
          heads and a few new ideas for the problems we'd been stuck on. It
          taught me that stepping away from the keyboard is part of doing the
          work well, and that some of the best conversations with teammates happen
          away from the desk.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            marginTop: 16,
          }}
        >
          <img
            src="/nature/IMG_4624~2.jpg"
            alt="Impala Sanctuary Nature Walk"
            style={{ width: "100%", maxHeight: 260, borderRadius: 12, objectFit: "contain" }}
          />
          <img
            src="/nature/IMG_4627~2.jpg"
            alt="Impala Sanctuary Nature Walk"
            style={{ width: "100%", maxHeight: 260, borderRadius: 12, objectFit: "contain" }}
          />
        </div>
      </article>

      <hr style={{ border: "none", borderTop: "1px solid var(--border, #eee)", margin: "40px 0" }} />

      <article style={{ marginTop: 40 }}>
        <h2>Peer-to-Peer Learning at Zone01 Kisumu</h2>
        <p className="muted">Zone01 Kisumu</p>
        <p style={{ marginTop: 12, maxWidth: 720 }}>
          At Zone01 Kisumu, learning happens peer to peer. Instead of listening to
          lectures, we're given real problems and work them out together: sharing
          approaches, reviewing each other's code, and explaining our reasoning
          when a teammate gets stuck. It's a way of learning that makes you
          better at both building and communicating, because you only really
          understand something once you can teach it. Some of my biggest
          breakthroughs came from a conversation with the person sitting next to
          me.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            marginTop: 16,
          }}
        >
          <img
            src="/peer/IMG_9814~2.JPG"
            alt="Peer-to-Peer Learning at Zone01 Kisumu"
            style={{ width: "100%", maxHeight: 260, borderRadius: 12, objectFit: "contain" }}
          />
        </div>
      </article>
    </section>
    </div>
  );
}
