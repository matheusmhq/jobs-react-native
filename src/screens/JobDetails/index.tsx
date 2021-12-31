import React, {useState, useEffect} from 'react';

// @ts-ignore
import Loading from 'components/Loading';
// @ts-ignore
import MsgError from 'components/MsgError';
// @ts-ignore
import Comment from 'components/Comment';
// @ts-ignore
import {SafeArea, ContainerScrollView} from '@general';
import {Title} from './ts/styles';

// @ts-ignore
import api from '@api';

interface Navigation {
  route: any;
}

interface IComments {
  author_association: string;
  body: string;
  created_at: string;
  html_url: string;
  id: number;
  issue_url: string;
  node_id: string;
  performed_via_github_app: string;
  reactions: any;
  updated_at: string;
  url: string;
  user: any;
}

const JobDetails: React.FC<Navigation> = ({route}) => {
  const {job} = route.params;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [comments, setComments] = useState<IComments[]>([]);

  useEffect(() => {
    getComments();
  }, []);

  function getComments() {
    setError(false);
    api
      .get<IComments[]>(job.comments_url)
      .then(response => {
        setComments(response.data);
      })
      .catch(error => setError(true))
      .finally(() => setLoading(false));
  }

  if (loading) return <Loading />;

  if (error) return <MsgError />;

  return (
    <SafeArea>
      <ContainerScrollView>
        <Title>{job.title}</Title>

        <Comment
          avatar_url={job.user.avatar_url}
          login={job.user.login}
          created_at={job.created_at}
          body={job.body}
          post_owner={true}
          html_url={job.html_url}
        />

        {comments.map(item => {
          return (
            <Comment
              key={item.id}
              avatar_url={item.user.avatar_url}
              login={item.user.login}
              created_at={item.created_at}
              body={item.body}
            />
          );
        })}
      </ContainerScrollView>
    </SafeArea>
  );
};

export default JobDetails;
