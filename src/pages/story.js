import Link from 'next/link';

const Story = () => {
  return (
    <div className="mx-auto flex max-w-xl flex-col gap-12 py-12 lowercase">
      <div className="flex flex-col gap-4">
        <p className="text-muted-foreground">my journey started in 2020</p>
        <p className="text-muted-foreground">i was a curious kid</p>
        <p className="text-muted-foreground">
          i wanted to build something on the internet
        </p>
        <p className="text-muted-foreground">
          i learned html and css, built my first website, and showed it off to
          friends
        </p>
        <p className="text-muted-foreground">
          i made websites for fun, not knowing i could earn money
        </p>
        <p className="text-muted-foreground">
          i discovered freelancing and started building websites for clients
        </p>
        <p className="text-muted-foreground">
          for 2 years, i built websites and learned without earning
        </p>
        <p className="text-muted-foreground">
          a client paid me $100 for a website—my first internet dollar!
        </p>
        <p className="text-muted-foreground">
          i was thrilled and knew i’d make it big someday
        </p>
        <p className="text-muted-foreground">
          the same client returned, happy with my work
        </p>
        <p className="text-muted-foreground">
          i shared my work online, and another client reached out
        </p>
        <p className="text-muted-foreground">
          i freelanced for 2 years, serving over 64 clients
        </p>
        <p className="text-muted-foreground">
          things were great, but i wanted more
        </p>
        <p className="text-muted-foreground">
          i left freelancing to build saas and startups
        </p>
        <p className="text-muted-foreground">
          my first saas, "impenny," managed expenses and income
        </p>
        <p className="text-muted-foreground">
          after 7 months of work, it launched but got no traction
        </p>
        <p className="text-muted-foreground">
          frustrated, i turned to gaming and got addicted
        </p>
        <p className="text-muted-foreground">i realized i was wasting time</p>
        <p className="text-muted-foreground">
          i joined twitter and shared my journey
        </p>
        <p className="text-muted-foreground">no results for a year</p>
        <p className="text-muted-foreground">i didn’t give up</p>
        <p className="text-muted-foreground">
          i built 8 saas projects, fully functional, but no one noticed
        </p>
        <p className="text-muted-foreground">
          i kept building and sharing without focusing on results
        </p>
        <p className="text-muted-foreground">
          then{' '}
          <Link
            className="text-primary"
            href="https://hextaui.com"
            target="_blank"
          >
            [HextaUI]
          </Link>{' '}
          took off!
        </p>
        <p className="text-muted-foreground">
          it got tons of users and impressions
        </p>
        <p className="text-muted-foreground">people loved it!</p>
        <p className="text-muted-foreground">
          i launched{' '}
          <Link
            className="text-primary"
            href="https://pro.hextaui.com"
            target="_blank"
          >
            [HextaUI pro]
          </Link>
          , and it was a hit too
        </p>
        <p className="text-muted-foreground">
          i kept working, and it scaled, bringing in money
        </p>
        <p className="text-muted-foreground">
          in 2 months, i achieved my dreams after 5 years of effort
        </p>
        <p className="text-muted-foreground">
          now i’m working on{' '}
          <Link className="text-primary" href="https://ikiform.com">
            [Ikiform]
          </Link>
          , an enterprise alternative to google forms and typeform
        </p>
        <p className="text-muted-foreground">
          ikiform has over 300 active users
        </p>
        <p className="text-muted-foreground">
          i also launched{' '}
          <Link className="text-primary" href="https://sorex.studio">
            [sorex studio]
          </Link>
          , a design agency for startups
        </p>
        <p className="text-muted-foreground">
          it took time, but everything fell into place
        </p>
        <p className="text-muted-foreground">
          keep working without obsessing over results
        </p>
        <p className="text-muted-foreground">
          hard work pays off—one day, you’ll see the results you dreamed of
        </p>
      </div>
      <div className="flex gap-2">
        <Link className="text-primary" href="/">
          [home]
        </Link>
        <Link className="text-primary" href="/twitter">
          [twitter]
        </Link>
        <Link className="text-primary" href="/github">
          [github]
        </Link>
        <Link className="text-primary" href="/youtube">
          [youtube]
        </Link>
        <Link className="text-primary" href="https://sorex.studio">
          [sorex.studio]
        </Link>
        <Link className="text-primary" href="https://ikiform.com">
          [ikiform]
        </Link>
        <Link className="text-primary" href="https://hextaui.com">
          [hextaui]
        </Link>
      </div>
    </div>
  );
};

export default Story;
