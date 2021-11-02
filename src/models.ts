export interface Similarity {
  text1: string;
  text2: string;
  token: string;
}

export interface Detection {
  text: string;
  clean: string;
  token: string;
}

export interface Sentiment {
  text: string;
  lang: string;
}
