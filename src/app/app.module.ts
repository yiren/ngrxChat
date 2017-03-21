import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { NgModule } from '@angular/core';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { ThreadsService } from './services/threads.service';
import { UserSelectionComponent } from './user-selection/user-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreadListComponent,
    ThreadSectionComponent,
    MessageListComponent,
    MessageSectionComponent,
    UserSelectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
