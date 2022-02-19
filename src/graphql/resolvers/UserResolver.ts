import { IResolvers } from '@graphql-tools/utils';
import {
	AuthenticateResponse,
	MutationRegisterArgs,
	QueryLoginArgs,
} from '../generated';

export const UserResolvers: IResolvers = {
	Query: {
		async login(
			_: void,
			args: QueryLoginArgs,
        ): Promise<AuthenticateResponse> {
            console.log(args)
			return {
				token: 'idi nahui',
			};
		},
	},
	Mutation: {
		async register(
			_: void,
			args: MutationRegisterArgs,
		): Promise<AuthenticateResponse> {
			return {
				token: 'token',
			};
		},
	},
};
