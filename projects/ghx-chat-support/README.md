# GHX CHAT SUPPORT

This is an Angular wrapper library for the [Ghx Chat Support](https://thegirishagarwal.github.io/ghx-chat-support/). To use this library you should get familiar with the Ghx Chat Support documentation as well since this documentation only explains details specific to this wrapper.

This documentation is for the latest 5/6.x.x version which requires Angular 5 or newer. For Angular 4 you need to use the latest 4.x.x version. Documentation for the 1.x.x can be found from <a href="https://github.com/thegirishagarwal/ghx-chat-support/">here</a>.


### Quick links

[Example application](https://thegirishagarwal.github.io/ghx-chat-support/)
 |
[StackBlitz example](https://stackblitz.com/github/thegirishagarwal/ghx-chat-support/tree/master)
 |
[Ghx Chat Support documentation](https://github.com/thegirishagarwal/ghx-chat-support/)

### Installing and usage

```bash
npm install ghx-chat-support --save
```

##### Load the module for your app (with global configuration):

Providing the global configuration is optional and when used you should only provide the configuration in your root module.

```javascript
import { GhxChatSupportModule } from 'ghx-chat-support';


@NgModule({
  ...
  imports: [
    ...
    GhxChatSupportModule
  ],
})
```

##### Use it in your HTML template (with custom configuration):

This library provides two ways to create a Ghx Chat Support for your project, a component. Component tries to make the usage as simple as possible.

**COMPONENT USAGE**

Simply replace the element that would ordinarily be passed to `PerfectScrollbar` with the perfect-scollbar component.

```html
<ghx-chat-support
    [chatBoxType]="'skype'"
    [chatList]="chatBoxListData"
>
</ghx-chat-support>
```

```javascript
[chatBoxType]           // Whatever you want the type of chat box (Skype, Messenger, Telegram, Whatsapp) (Default: Skype).
[chatList]              // List of active team member who available for interact with user
```

##### Available configuration in chatList option:

```javascript
userImg                 // Image of your team member who visible to user.
userName                // Name of the team member.
userDesignation         // Designation of team member
contactName             // This is contact name of your team member.
                        // Whatsapp: Your mobile number
                        // Telegram/Messenger/Skype: Your userName
userAvailability        // This is time of your team member avaibility. If you don't use this option that your team member will be always offline.
```

For more detailed documentation with all the supported events / options see the the Ghx Chat Support documentation.
