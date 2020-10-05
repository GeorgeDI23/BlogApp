import { PostContent } from './postcontent';

export interface Post {
	post_Id: string;
  userName: string;
  title: string;
	tag: string;
	postContent: PostContent;
}
