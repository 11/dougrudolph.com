import 'views/view-homepage';
import 'views/view-about';

import 'views/blogs/view-particle-net';
import 'views/blogs/view-installing-chunkwm';
import 'views/blogs/view-vimrc-starter-kit';
import 'views/blogs/view-dna-helix';


/*
 * TODO: figure out how to make this work
 * Purpose: wait to load files when requested from the router
 *   - prevents importing/loading all website routes on startup
 */
// async function lazyLoad(viewFilepath) {
//   await import (viewFilepath);
// }


export const ROUTING_TABLE = [
  /****** TOP LEVEL ROUTES: *****/
  { path: '/', component: 'view-homepage' },
  { path: '/about',   component: 'view-about' },
  { path: '/contact',   component: 'view-contact' },


  /****** BLOG ROUTES ******/
  // Tutorials
  { path: '/blog/installing-chunkwm', component: 'view-installing-chunkwm' },
  { path: '/blog/vimrc-starter-kit', component: 'view-vimrc-starter-kit' },

  // Animations
  { path: '/blog/particle-net', component: 'view-particle-net' },
  { path: '/blog/dna-helix', component: 'view-dna-helix' },


  // Articles
  { path: '/blog/just-concentrate', component: 'view-just-concentrate' },

];