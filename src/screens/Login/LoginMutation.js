import { commitMutation, graphql } from 'react-relay';
import env from '../../createRelayEnvironment';

const mutation = graphql`
  mutation LoginMutation($input: LoginInput!) {
    Login(input: $input) {
      error
      token
    }
  }
`;

function commit(input, onCompleted, onError) {
  return commitMutation(env, {
    mutation,
    variables: {
      input,
    },
    onCompleted,
    onError,
  });
}

export default { commit };
