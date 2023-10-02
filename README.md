# Rudman, the Cookie Example

> David Rudman is the voice of Cookie Monster. Get it?

Rudman is a series of examples for extremely simple backend and front-end integration, to demonstrate that it is,
indeed, exeedingly straightforward to use cookie-based sessions using a readonly session ID cookie in the browser.

The reason this repository exists is to demonstrate the ease of this system, versus the uses of JWTs for local authentication.

Better people than me have explained why JWTs should not be used for single-origin, so I don't really need to elaborate here,
[just send you to them](https://gist.github.com/samsch/0d1f3d3b4745d778f78b230cf6061452)...

So what do we do instead? Cookies! Specifically, session IDs stored inside a cookie that is :

* SameSite : only works on one domain, or other subdomains of the same domain.
* Secure: only works on https, not http, so you know your transactions are secure.
* httpOnly: cannot be accessed by javascript, so it cannot be hijacked by anything on your site or loaded externally.

What does this require on the backend?

* An HTTP server you have already, like express, fastify, koa, etc.
* A session management middleware like express-session, fastify-session, koa-session... you get the picture.
* A database to store the sessions. Honestly a simple SQLite file will do, but scaling demands might require more than this.

And that's it... But what about the front-end? What does *it* require?

* fetch. Yeah that's it. You fetch to login, get data, post data, logout, etc.
* literally nothign else. no cookie library, no localStorage library, no JWT library, no encryption lib... The browser does all the work.

## How Rudman helps

I understand that there is a relative lack of cookie-based tutorials and examples that have been presented in recent years. Everyone
and their cousin is pushing for JWT because they've been told it's good, and being wrong doesn't really affect their behaviour. This
repository aims at demonstrating two important points:

* You can mix and match different frontend and backend frameworks without any problem since cookies are perfectly framework-agnostic. Any frontend, any backend.
* Cookies are so trivial you'll barely see any actual implementation details in the front-end. Most of the work is setting up a global context like vuex/context/etc.

## How to set them up

* Choose a front-end, copy it, run it.
* Choose a back-end, copy it, run it.

That's it. you have a working demo.

## What's upcoming in the future?

I rarely have the mental bandwidth to work on this (as apparent with the 2 years it took for me to do *any* update) but my goals are many, if I do take the time:

* Add more frameworks for backend (koa, hono, others that might pop up)
* Add more frameworks for frontend (angular, svelte, astro, whatever comes up as useful)
* Add some full-stack examples (next/nuxt/etc)
* Standardize implementations: they should all be a todo list with login and admin features.

## I can help, how do I???

Hey, if you want to help by providing on of the above, or clean up some code, or do testing, or whatever... please, by all means, go ahead and PR this repository!

I appreciate any and all contributions, and though I  cannot guarantee I will immediately accept all of them or at all, I will make best effort to act on them in a timely fashion.

## How do I talk to you?

Best way is to [join my discord](https://discord.evie.codes/), or [The Coding Den](https://discord.gg/code) where I hang out often. TCD is a great general programming community, with lots of awesome people!
