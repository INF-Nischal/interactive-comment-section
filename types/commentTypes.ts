export interface TComment {
  id?: number;
  content: string;
  createdAt: string;
  score: number;
  user?: TUser;
  replies?: TReply[];
  replyingTo?: string;
}

export interface TUser {
  image?: {
    png: string;
    webp: string;
  };
  username?: string;
}

export interface TReply {
  id?: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: TUser;
}
