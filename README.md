This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The goal is to keep it completely static so the website can be hosted and served by apache on my personal server.

To build, run:

```bash
next build && next export
```

The result will be in `./out`. Zip it and ship it.

To serve from apache, a few things are in order. Fortunately, the links are all without the `.html` suffix, so all we should have to do really, is make a rewrite from `/^(.+).html$/` to `$1`, to help apache resolve the file, basically. For SEO purposes, however, we also add a `302 Found` rewrite for the same thing. In apache-lingo:

```apache
	# Redirects domain.com/file.html to domain.com/file
	RewriteEngine On

	# is not directory
	# has a corresponding html file
	RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} !-d
	RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI}\.html -f

	# serve index.html instead
	RewriteRule ^(.*)$ $1.html [L]


	# is not a directory
	RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} !-d

	# redirect from index.html to index
	RewriteRule ^(.*)\.html$ $1 [R,L]
``` 

## License

The sourcecode in this repository is licensed under the [MIT License](./LICENSE_sourcecode).

All images in this project are private. You are not allowed to use, copy, modify, distribute and/or sell copies of them.
