import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema/typeDefs';
import { resolvers } from './resolver/resolvers';


const main =async () => {
    
    const server = new ApolloServer({
        typeDefs,
        resolvers,
      });
      
    
      const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
      });
      
      console.log(`🚀  Server ready at: ${url}`);
};

main().catch((error) => console.error(error));
