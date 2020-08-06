/* eslint-disable no-undef */
import { login } from './auth.service';

describe('login', () => {
	it('check wrong mail ', () => {
		expect(login('qqq@qq.qq', '123qqqQQQ')).toBe(true);
	});
});
