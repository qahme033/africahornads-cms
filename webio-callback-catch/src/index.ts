import { defineEndpoint } from '@directus/extensions-sdk';
import { Router, Request, Response} from 'express';

export default defineEndpoint((router: Router) => {
	router.get('/oauth/login', (_req: Request, res: Response) => {
		// const url = process.env.PUBLIC_URL
		res.redirect('/auth/login/github/callback');
})});
