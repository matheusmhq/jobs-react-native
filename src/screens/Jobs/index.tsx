import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import moment from 'moment';

// @ts-ignore
import {SafeArea} from '@general';
// @ts-ignore
import Loading from 'components/Loading';
import {
  BtnJob,
  Title,
  ContainerLabels,
  ItemLabel,
  Label,
  TextInfo,
  TextQtyComment,
} from './ts/styles';

// @ts-ignore
import api from '@api';
// @ts-ignore
import {hexToRgbA} from '@utils';

interface Props {
  navigation: any;
  route: any;
}

interface IJobs {
  active_lock_reason: null;
  assignee: null;
  assignees: Array<any>;
  author_association: string;
  body: string;
  closed_at: string;
  comments: number;
  comments_url: string;
  created_at: string;
  events_url: string;
  html_url: string;
  id: number;
  labels: Array<any>;
  labels_url: string;
  locked: boolean;
  milestone: null;
  node_id: string;
  number: number;
  performed_via_github_app: null;
  reactions: any;
  repository_url: string;
  state: string;
  timeline_url: string;
  title: string;
  updated_at: string;
  url: string;
  user: any;
}

const Jobs: React.FC<Props> = ({navigation, route}) => {
  const {repo, org} = route.params.org;
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState<IJobs[]>([]);

  useEffect(() => {
    api
      .get<IJobs[]>(`/repos/${org}/${repo}/issues`)
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => console.log({error}))
      .finally(() => setLoading(false));
  }, []);

  function goToJobDetails(item) {
    navigation.navigate('JobDetails', {job: item});
  }

  function renderItem(item: IJobs) {
    return (
      <BtnJob onPress={() => goToJobDetails(item)}>
        <Title>{item.title}</Title>

        <ContainerLabels>
          {item.labels.map(label => {
            return (
              <ItemLabel
                key={label.id}
                style={{backgroundColor: hexToRgbA(`#${label.color})`)}}>
                <Label style={{color: `#${label.color})`}}>{label.name}</Label>
              </ItemLabel>
            );
          })}
        </ContainerLabels>

        <TextQtyComment>
          {item.comments > 0
            ? `${item.comments} comentário(s)`
            : 'Nenhum comentário'}
        </TextQtyComment>

        <TextInfo>
          #{item.number} aberto em{' '}
          {moment(item.created_at).format('DD/MM/YYYY')} por {item.user.login}
        </TextInfo>
      </BtnJob>
    );
  }

  if (loading) return <Loading />;
  else {
    return (
      <SafeArea>
        <FlatList<IJobs>
          style={{padding: 20}}
          data={jobs}
          renderItem={data => renderItem(data.item)}
          keyExtractor={item => String(item.id)}
        />
      </SafeArea>
    );
  }
};

export default Jobs;
