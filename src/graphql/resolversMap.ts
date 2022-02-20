import { IResolvers } from '@graphql-tools/utils';
import { merge } from 'lodash';
import { BookingsResolvers } from './resolvers/BookingsResolvers';

const resolverMap: IResolvers = merge(BookingsResolvers);

export default resolverMap;
