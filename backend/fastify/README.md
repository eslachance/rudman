# Simple Authentication Server for Todo App

This is a relatively simple authentication server for a todo app. What todo app, you ask? I'm so glad you want to know!

The idea here is that this fastify-based server can work with a *few* potential front-end apps built with various frameworks.
Because it's framework-agnostic, you can mix and match the back-end and front-end as much as you want. The only important link between
the technologies is the use of a CRUD REST interface, as well as the use of httpOnly, samesite cookies to store a session ID.

## So how do I use this?

If you're here, chances are you've chosen the Fastify route for your backend. If not, there's other alternatives which... I'm currently working on
and aren't ready so stay tuned for a blog post or site or another gist to link to alternatives in Express and Koa at the very least.

As for the front-end, currently the only one I've finished is the [SolidJS Implementation](https://github.com/eslachance/solid-foundation/tree/test-login-system)
which will move location at one point but for now that test repository will suffice.

## Running this Code

You can simply download a ZIP of this gist and extract it anywhere, then run the normal nodejs things you're used to: `npm i` or `yarn` , and then `node index.mjs`.

Note that this is built as an ES Module because... you should all be building ES modules, it's 2021, c'mon, get with the program, node community!

## Why Session Cookies?

Because JWTs are *not* an appropriate replacement for the simple, solid, provably safe session cookies. That's right, JWTs aren't *safe* and you *know* it.
For proof, start with [this gist](https://gist.github.com/samsch/0d1f3d3b4745d778f78b230cf6061452) by samsch which describes the pitfalls of JWTs. I also
strongly recommend watching [the linked video by Randall Degges](https://www.youtube.com/watch?v=pYeekwv3vC4) which is both entertaining and very informative
as they reveal JWTs as session stores are just a massive marketing conspiracy by Auth0 to advertise their solutions. If you think all those blog
articles about how JWTs are great exist for any other reason than to get advertising money from people bringing that Kool-Aid, I hate to break it to you but...