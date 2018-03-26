import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { LeftComponent } from './left/left.component';
import { CenterComponent } from './center/center.component';
import { RightComponent } from './right/right.component';
import { RightItemComponent } from './right-item/right-item.component';
import { FourthViewComponent } from './fourth-view/fourth-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    LeftComponent,
    CenterComponent,
    RightComponent,
    RightItemComponent,
    FourthViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
