import { gql } from '@apollo/client';

export const POST_QUERY = gql`
    query {
        posts {
            _id
            Image
            Title
        }
    }
`;

export const POST_QUERY_LIMIT = gql`
    query ($limit: Int) {
        posts(limit: $limit) {
            _id
            Image
            Title
        }
    }
`;

export const POST_DETAIL_QUERY = gql`
    query ($postsId: ID) {
        posts(id: $postsId) {
            _id
            Image
            Title
        }
    }
`;


