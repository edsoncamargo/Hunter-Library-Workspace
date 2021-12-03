import { SidebarComponent } from '../lib/components/sidebar/sidebar.component';
import { sandboxOf } from 'angular-playground';

export default sandboxOf(SidebarComponent).add('default', {
  template: `<hnt-sidebar></hnt-sidebar>`,
});
