import HttpException from './HttpException';

class PageNotFoundException extends HttpException {
	constructor(page: number) {
		super(404, `Page with number ${page} not found`);
	}
}

export default PageNotFoundException;