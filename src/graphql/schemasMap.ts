// Allow to import .graphql files in the application
import { GraphQLSchema } from 'graphql';
import 'graphql-import-node';
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from './resolversMap';
import * as emptyTypeDefs from './schemas/empty.graphql';
import * as bookingTypeDefs from './schemas/bookings.graphql';

const schema: GraphQLSchema = makeExecutableSchema({
	typeDefs: [emptyTypeDefs, bookingTypeDefs],
	resolvers,
});

export default schema;
