import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  // selector: ['app-server'] select by attribute <div app-server>
  // selector:".app-server" selects by class <div class = 'app-server'>
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = 'offline';
  allowNewServer = true;
  numberOfCreatedServers = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);
  }

  ngOnInit() {
  }

  getServerStatus(): string {
    return this.serverStatus;
  }

  onCreateServer() {
    this.numberOfCreatedServers++;
  }
}
