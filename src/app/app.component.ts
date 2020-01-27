// import { TabsPage } from './tabs/tabs.page'
import { Component } from '@angular/core'

import { Platform } from '@ionic/angular'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { Deeplinks } from '@ionic-native/deeplinks/ngx'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private deeplinks: Deeplinks
  ) {
    this.deeplinks.route({}).subscribe(
      match => {
        // match.$route - the route we matched, which is the matched entry from the arguments to route()
        // match.$args - the args passed in the link
        // match.$link - the full link data
        // console.log('Successfully matched route', match)
      },
      nomatch => {
        // nomatch.$link - the full link data
        // console.error('Got a deeplink that did not match', nomatch)
      }
    )
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')

    // toggleDarkTheme(prefersDark.matches)

    // // Listen for changes to the prefers-color-scheme media query
    // prefersDark.addListener(mediaQuery => toggleDarkTheme(mediaQuery.matches))

    // // Add or remove the "dark" class based on if the media query matches
    // function toggleDarkTheme(shouldAdd) {
    //   document.body.classList.toggle('dark', shouldAdd)
    // }

    this.initializeApp()
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault()
      this.splashScreen.hide()
    })
  }
}
