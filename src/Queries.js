import { gql } from '@apollo/client';

export const POST_QUERY = gql`
    query {
        posts {
            Image
            Title
        }
    }
`;

export const POST_QUERY_LIMIT = gql`
query ($limit: Int) {
    posts(limit: $limit) {
        Image
        Title
    }
}
`;

