module.exports.generateCSP = () => {
  const policy = {};

  const add = (directive, value, options = {}) => {
    if (options.devOnly && process.env.NODE_ENV !== "development") return;
    const curr = policy[directive];
    policy[directive] = curr ? [...curr, value] : [value];
  };

  add("default-src", "'self'");

  add("script-src", "https://ajax.cloudflare.com");

  add("connect-src", "'self' https://wqofdnnlvvmxyuhkjwpx.supabase.co");
  add(
    "script-src",
    "'self' https://vercel.live 'unsafe-inline' https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js https://cpwebassets.codepen.io/assets/embed/ei.js https://js.stripe.com/v3/buy-button.js https://giscus.app/client.js https://ajax.cloudflare.com/cdn-cgi/scripts/04b3eb47/cloudflare-static/mirage2.min.js https://cpwebassets.codepen.io"
  );
  add(
    "frame-src",
    "https://codepen.io https://giscus.app http://localhost:3000"
  );
  add(
    "style-src",
    "'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tokyo-night-dark.min.css https://giscus.app"
  );
  add("script-src", "'unsafe-eval'");

  add("img-src", "* blob: data:");
  add("media-src", "* data:");
  add(
    "font-src",
    "'self' https://fonts.googleapis.com https://fonts.gstatic.com https://api.iconify.design"
  );

  return Object.entries(policy)
    .map(([key, value]) => `${key} ${value.join(" ")}`)
    .join("; ");
};
