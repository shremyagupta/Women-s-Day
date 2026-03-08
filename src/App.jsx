import { useState, useRef } from 'react'
import './App.css'
import heroImage from './assets/img1.jpg'
import storyImage from './assets/img2.jpg'
import celebrateImage from './assets/img3.webp'

const roleHighlights = {
  Leaders:
    'From boardrooms to classrooms, women are reshaping what leadership looks like with empathy, clarity and courage.',
  Creators:
    'Artists, writers, designers and innovators are telling new stories and building tools that reflect every woman\'s voice.',
  Changemakers:
    'Activists, organizers and everyday allies are pushing communities toward fairness, safety and equal opportunity.',
  Everyday:
    'Mothers, daughters, sisters, friends and colleagues — the quiet strength of everyday women keeps the world moving.',
}

const timeline = [
  {
    year: 'Early 1900s',
    title: 'Voices Begin To Rise',
    description:
      'Women around the world organize for voting rights, fair working conditions and recognition of their contributions.',
  },
  {
    year: '1970s',
    title: 'Global Momentum',
    description:
      'International movements amplify calls for equality in education, work and representation across public life.',
  },
  {
    year: 'Today',
    title: 'Inspiring Every Generation',
    description:
      'Digital platforms, community projects and local leaders are connecting women across borders like never before.',
  },
]

const stories = [
  {
    label: 'STEM',
    title: 'Building the Future',
    text: 'Women engineers, scientists and developers are solving complex problems — from climate research to everyday apps.',
  },
  {
    label: 'COMMUNITY',
    title: 'Hands That Lift Up',
    text: 'Mentors, teachers and volunteers nurture confidence, curiosity and opportunity for the next generation.',
  },
  {
    label: 'CREATIVE',
    title: 'Stories That Heal',
    text: 'Authors, filmmakers and musicians turn lived experience into art that inspires empathy and change.',
  },
]

const appreciationIdeas = [
  'Thank you for believing in me even on the days I did not believe in myself.',
  'Your quiet strength and everyday care make the hardest days feel softer.',
  'Because of you, I know what kindness and courage look like in real life.',
]

function App() {
  const [activeRole, setActiveRole] = useState('Leaders')
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(2)
  const [honoreeName, setHonoreeName] = useState('')
  const [appreciation, setAppreciation] = useState('')
  const [hasPromised, setHasPromised] = useState(false)
  const promisePreviewRef = useRef(null)

  const activeTimelineItem = timeline[activeTimelineIndex]

  const handlePromiseClick = () => {
    setHasPromised(true)
    queueMicrotask(() => {
      if (promisePreviewRef.current) {
        promisePreviewRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    })
  }

  return (
    <div className="app">
      <div className="background-orbit background-orbit--one" aria-hidden="true" />
      <div className="background-orbit background-orbit--two" aria-hidden="true" />

      <header className="top-nav">
        <div className="top-nav__brand">Women&apos;s Day</div>
        <nav className="top-nav__links" aria-label="Primary">
          <a href="#home">Home</a>
          <a href="#stories">Stories</a>
          <a href="#journey">Journey</a> 
          <a href="/#impact" target="_blank" rel="noreferrer">
            Impact
          </a>
          <a href="#education">Education</a>
          <a href="#celebrate">Celebrate</a>
        </nav>
      </header>

      <main className="page" id="home">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero__content">
            <p className="hero__eyebrow">International Women&apos;s Day</p>
            <h1 id="hero-heading" className="hero__title">
              Celebrate the strength, creativity &amp; courage of women everywhere.
            </h1>
            <p className="hero__subtitle">
              One day to honor a lifetime of impact. Explore stories, milestones and the everyday moments where women
              quietly change the world — together with families, fathers and allies who stand beside them. 
              
            </p>
            <div className="hero__actions">
              <a href="#celebrate" className="button button--primary">
                Celebrate Her Today
              </a>
              <a href="#stories" className="button button--ghost">
                Read Her Story
              </a>
            </div>
            <dl className="hero__stats" aria-label="Highlights">
              <div className="hero__stat">
                <dt>∞</dt>
                <dd>Ways to uplift women</dd>
              </div>
              <div className="hero__stat">
                <dt>1</dt>
                <dd>Voice that can start change — yours</dd>
              </div>
              <div className="hero__stat">
                <dt>365</dt>
                <dd>Days to celebrate, not just one</dd>
              </div>
            </dl>
            <div className="hero__keywords" aria-hidden="true">
              <span className="hero__keyword-chip">strength</span>
              <span className="hero__keyword-chip">creativity</span>
              <span className="hero__keyword-chip">courage</span>
              <span className="hero__keyword-chip">hope</span>
            </div>
          </div>

          <aside className="hero__panel" aria-label="Spotlight">
            <p className="hero__panel-label">Spotlight</p>
            <h2 className="hero__panel-title">Women who shape our world</h2>
            <div className="chip-row" role="tablist" aria-label="Areas of impact">
              {Object.keys(roleHighlights).map((role) => (
                <button
                  key={role}
                  type="button"
                  role="tab"
                  aria-selected={activeRole === role}
                  className={
                    activeRole === role ? 'chip chip--active' : 'chip'
                  }
                  onClick={() => setActiveRole(role)}
                >
                  {role}
                </button>
              ))}
            </div>
            <p className="hero__panel-text">{roleHighlights[activeRole]}</p>
            <figure className="hero__image-frame">
              <img
                src={heroImage}
                alt="Women coming together to celebrate and support one another"
                className="hero__image"
              />
            </figure>
          </aside>
        </section>

        <section className="section section--stories" id="stories" aria-labelledby="stories-heading">
          <div className="section__header">
            <h2 id="stories-heading">Every woman carries a story</h2>
            <p>
              Here are just a few of the countless journeys that show how courage, care and curiosity can change
              everything.
            </p>
          </div>
          <div className="cards-grid" aria-label="Story highlights">
            {stories.map((story) => (
              <article key={story.title} className="story-card">
                <p className="story-card__label">{story.label}</p>
                <h3 className="story-card__title">{story.title}</h3>
                <p className="story-card__text">{story.text}</p>
              </article>
            ))}
          </div>
          <article className="featured-story" aria-label="Inspiring story">
            <h3 className="featured-story__title">Meera&apos;s late–night classroom</h3>
            <p className="featured-story__text">
              After a full day of caring for her two children and helping in her parents&apos; shop, Meera opened her
              laptop at midnight to finish an online engineering course. Some nights she fell asleep on the keyboard,
              but she kept going.
            </p>
            <p className="featured-story__text">
              Three years later, she used those skills to build a simple app that helps girls in her village find
              scholarship forms and safe travel routes to school. It hasn&apos;t changed the whole world — but it has
              changed theirs.
            </p>
            <figure className="featured-story__image-frame">
              <img
                src={storyImage}
                alt="A woman studying late at night with her laptop open"
                className="featured-story__image"
              />
            </figure>
          </article>
        </section>

        <section className="section section--journey" id="journey" aria-labelledby="journey-heading">
          <div className="section__header section__header--inline">
            <div>
              <h2 id="journey-heading">A journey across generations</h2>
              <p>
                Women&apos;s Day is not just a date on the calendar — it&apos;s a living timeline of courage, resistance and
                hope, carried forward by grandmothers, mothers, fathers, friends and allies who refuse to stop dreaming
                of something better.
              </p>
            </div>
            <div className="timeline-tabs" role="tablist" aria-label="Select a moment in time">
              {timeline.map((item, index) => (
                <button
                  key={item.year}
                  type="button"
                  role="tab"
                  aria-selected={activeTimelineIndex === index}
                  className={
                    activeTimelineIndex === index
                      ? 'timeline-chip timeline-chip--active'
                      : 'timeline-chip'
                  }
                  onClick={() => setActiveTimelineIndex(index)}
                >
                  {item.year}
                </button>
              ))}
            </div>
          </div>

          <p className="timeline-hint">Tap a year to watch how the story changes.</p>

          <article
            key={activeTimelineItem.year}
            className="timeline-card timeline-card--animated"
            aria-live="polite"
          >
            <p className="timeline-card__subtitle">{activeTimelineItem.year}</p>
            <h3 className="timeline-card__title">{activeTimelineItem.title}</h3>
            <p className="timeline-card__text">{activeTimelineItem.description}</p>
          </article>
        </section>

        <section className="section section--impact" id="impact" aria-labelledby="impact-heading">
          <div className="section__header">
            <h2 id="impact-heading">Ways you can make an impact</h2>
            <p>
              You don&apos;t need a stage to celebrate women — small, intentional actions in everyday life can echo far
              beyond today.
            </p>
          </div>

          <div className="impact-grid">
            <a
              className="impact-card impact-card--link"
              href="/impact-see-listen.html"
              target="_blank"
              rel="noreferrer"
            >
              <h3>See. Listen. Amplify.</h3>
              <ul>
                <li>
                  <strong>Share the work</strong> of women creators, founders and leaders you admire.
                </li>
                <li>
                  <strong>Make space</strong> in conversations for quieter voices to be heard.
                </li>
                <li>
                  <strong>Credit ideas properly</strong> — name the woman who inspired the change.
                </li>
              </ul>
            </a>
            <a
              className="impact-card impact-card--link"
              href="/impact-support.html"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Support where it matters</h3>
              <ul>
                <li>
                  <strong>Donate</strong> to organizations that protect women&apos;s rights and safety.
                </li>
                <li>
                  <strong>Shop</strong> from women-led businesses and local artisans.
                </li>
                <li>
                  <strong>Offer time, skills or mentorship</strong> to a girl or woman near you.
                </li>
                <li>
                  <strong>Honour fathers and father figures</strong> who share care, stand beside mothers and quietly
                  shape their children&apos;s confidence.
                </li>
              </ul>
            </a>
            <a
              className="impact-card impact-card--fathers impact-card--link"
              href="/impact-fathers-allies.html"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Grateful for fathers &amp; allies</h3>
              <ul>
                <li>
                  <strong>Notice the everyday love, work and protection</strong> fathers offer their children.
                </li>
                <li>
                  <strong>Thank the men</strong> who choose to uplift women&apos;s voices at home, school and work.
                </li>
                <li>
                  <strong>Teach every child</strong> that care, respect and courage belong to everyone — not just one
                  gender.
                </li>
              </ul>
            </a>
          </div>
        </section>

        <section className="section section--education" id="education" aria-labelledby="education-heading">
          <div className="section__header">
            <h2 id="education-heading">Education lights every generation</h2>
            <p>
              When girls and women learn, families grow stronger, communities become fairer and the future opens for
              everyone.
            </p>
          </div>

          <div className="education-grid">
            <article className="impact-card education-card">
              <h3>Learn her story</h3>
              <ul>
                <li>
                  <strong>Talk about women leaders</strong> in science, art, sports and everyday life at home.
                </li>
                <li>
                  <strong>Share books, videos and podcasts</strong> that show girls what is possible.
                </li>
              </ul>
            </article>
            <article className="impact-card education-card">
              <h3>Support her classroom</h3>
              <ul>
                <li>
                  <strong>Encourage daughters, sisters and friends</strong> to ask questions and choose bold subjects.
                </li>
                <li>
                  <strong>Stand beside teachers</strong> who create safe, respectful spaces for every girl to learn.
                </li>
              </ul>
            </article>
            <article className="impact-card education-card education-card--accent">
              <h3>Celebrate every small step</h3>
              <ul>
                <li>
                  <strong>Notice the effort</strong> it takes to study, care for family and still dream big.
                </li>
                <li>
                  <strong>Cheer for exams passed, skills learned and dreams named</strong> — not just final results.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section section--promise" aria-labelledby="promise-heading">
          <div className="promise-panel">
            <h2 id="promise-heading">Start with one promise</h2>
            <p>
              Choose one simple action you&apos;ll take this week — a message sent, a story shared, a boundary honored —
              and let it be the first step of many before you write your reflection below.
            </p>
          </div>
        </section>

        <section className="section section--celebrate" id="celebrate" aria-labelledby="celebrate-heading">
          <div className="celebrate">
            <div className="celebrate__content">
              <h2 id="celebrate-heading">Who are you celebrating today?</h2>
              <p>
                Take a quiet moment to think of a woman who has shaped your life. A message, a call, a thank-you note or
                a promise to pay it forward — it all counts.
              </p>
              <p className="celebrate__note">
                You don&apos;t have to submit anything here. This space is a gentle reminder that honoring women begins with
                intention.
              </p>
              <figure className="celebrate__image-frame">
                <img
                  src={celebrateImage}
                  alt="Hands passing a flower as a gesture of gratitude"
                  className="celebrate__image"
                />
              </figure>
            </div>
            <form className="celebrate__form" aria-label="Personal reflection">
              <label className="field">
                <span>Her name or role (optional)</span>
                <input
                  type="text"
                  placeholder="e.g. My grandmother, my mentor, my friend"
                  value={honoreeName}
                  onChange={(event) => {
                    setHonoreeName(event.target.value)
                  }}
                />
              </label>
              <label className="field">
                <span>One thing you appreciate about her</span>
                <textarea
                  rows="3"
                  placeholder="Write a short note of gratitude to her or to yourself."
                  value={appreciation}
                  onChange={(event) => {
                    setAppreciation(event.target.value)
                  }}
                ></textarea>
              </label>
              <div className="celebrate__ideas">
                <span className="celebrate__ideas-label">Need a little nudge?</span>
                <div className="celebrate__ideas-chips">
                  {appreciationIdeas.map((idea) => (
                    <button
                      key={idea}
                      type="button"
                      className="celebrate__idea-chip"
                      onClick={() => setAppreciation(idea)}
                    >
                      Use this idea
                    </button>
                  ))}
                </div>
              </div>
              <p className="celebrate__helper" aria-hidden="true">
                {appreciation.length} characters written — your words already matter.
              </p>
              <button
                type="button"
                className="button button--primary button--full"
                onClick={handlePromiseClick}
              >
                I promise to celebrate her
              </button>
            </form>
            {hasPromised && (
              <div className="promise-preview" aria-live="polite" ref={promisePreviewRef}>
                <p className="promise-preview__title">Your promise to celebrate</p>
                <p className="promise-preview__name">
                  {honoreeName || 'A woman who has shaped your journey'}
                </p>
                <p className="promise-preview__message">
                  {appreciation ||
                    'You have taken a quiet moment to honor her impact today — carry that intention with you.'}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          Every day can be Women&apos;s Day when we choose to notice, support and celebrate the women around us.
        </p>
        <p className="footer__credit">
          Crafted with gratitude and hope by <span>Shremya Gupta </span>.
        </p>
      </footer>
    </div>
  )
}

export default App
