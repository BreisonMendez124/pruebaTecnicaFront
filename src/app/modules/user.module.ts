export class userModel{
      login:string = 'user';
      id: number = 123545;
      node_id: string = 'URL';
      avatar_url: string = 'URL';
      gravatar_id: string = 'URL';
      url: string = 'URL';
      html_url: string = 'URL';
      followers_url: string = 'URL';
      following_url: string = 'URL';
      gists_url: string = 'URL';
      starred_url: string = 'URL';
      subscriptions_url: string = 'URL';
      organizations_url: string = 'URL';
      repos_url: string = 'URL';
      events_url: string = 'URL';
      received_events_url: string = 'URL';
      type: string = 'URL';
      site_admin: boolean = true;
      score: string = '1.0';

   contructor(){
    this.site_admin = true;

  }
}