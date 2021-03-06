import { LitElement, html, css } from 'lit-element';
import { BlogStyle } from 'views/blogs/style.js'

import "components/comp-link";

class BlogVimrcStarterKit extends LitElement {
  static get styles() {
    return [ BlogStyle ];
  }

  constructor() {
    super();

    document.title = 'Vimrc Starter Kit';
  }

  render() {
    return html`
      <comp-bio></comp-bio>
      <div class="blog">
        <div class="blog-header">
          <h2>Vimrc Starter Kit</h2>
          <span>Posted on April 11th, 2018</span>
          <p>
            I can go on for quite awhile about how intricate vim settings can get, but when searching the
            internet about creating a bare-bones <code>.vimrc</code>, I couldn't find a single article.
            So here's a brief post to start off your <code>.vimrc</code>.
          </p>
          <ol>
            <li><comp-link url="#creating-vimrc">Creating Your .vimrc</comp-link></li>
            <li><comp-link url="#settings-list">First Set of Commands</comp-link></li>
            <li><comp-link url="#example-vimrc">Example Raw .vimrc File</comp-link></li>
          </ol>
          <hr/>
        </div>

        <!-- Blog article -->
        <div class="blog-container">
          <div id="creating-vimrc">
            <h2> Creating Your .vimrc</h2>
            <p>
              Throughout this post, we are going to be editing the <code>.vimrc</code> file.
              Before we start editing files, we first have to understand what files we are going to be creating
              throughout this tutorial - as well as the purpose of each file. Lucky for us, the only file we are going
              to be editing is the <code>.vimrc</code>.

              The only purpose of the <code>.vimrc</code> is to store settings

              Important to quickly introduce what a <code>.vimrc</code> file is.


              To start, open your terminal and write <code>touch ~/.vimrc</code> - press enter when you're done.
              If you know what you're doing, you can skip to the <comp-link url="#settings-list">next section</comp-link>,
              otherwise, keep reading.
            </p>
            <p>
              The <code>touch</code> command we entered creates a <code>.vimrc</code> file in the home folder
              if one doesn't exist. The off chance is does exist, all <code>touch</code> does is update
              the date and time that file was last accessed.
            </p>
            <p>
              Now when creating a file that contains a <code>.</code> in the beginning of its name, the <code>.</code> denotes that
              the file is designed to be hidden. Therefore searching for your <code>.vimrc</code> file is a little more
              complicated than just <code>ls ~/</code>. Instead, we must use <code>ls -a ~/</code>. The <code>-a</code>
              simply stands for <code>all</code> and will show all files in a folder - even those that are hidden.
            </p>

            <p>
              Take a look at what happens when we run <code>ls -a ~/</code>
            </p>

  <div class="code-block"><pre>
  .vimrc                             Library
  .zcompdump-DouglasRudolph-MBPr-5.3 Movies
  .zsh-update                        Music
  .zsh_history                       Pictures
  .zshrc                             Public
  Applications                       VirtualBox VMs
  Desktop
  Documents
  Downloads</pre></div>
            <p>
              Our <code>.vimrc</code> shows up.
            </p>
            <p>
              Now remember it's important for your <code>.vimrc</code> to be in the home directory in order
              for vim to recognize it - thats what <code>~/</code> stands for. (just another way to write home
              directory) You'll know if you're in your home directory when the command <code>pwd</code> returns
              <code>/Users/your-usermame</code>.
            </p>
            <p>
              One last thing, if you ever want to edit your <code>.vimrc</code>, no matter where you are in
              your terminal, just type: <code>vim ~/.vimrc</code>.
            </p>
            </div>
              <div id="settings-list">
                <h2>First Set of Commands</h2>
                <h3>Line Numbers: <code>set number</code></h3>
                <p class="list-paragraph">
                  Turns on line numbers - a feature that is always necessary.
                </p>

                <h3>Mouse Navigation: <code>set mouse=a</code></h3>
                <p class="list-paragraph">
                  Allows for mouse control that is similar to other GUI editors.
                </p>

                <h3>Syntax Highlighting: <code>syntax on</code></h3>
                <p class="list-paragraph">
                  Turns on syntax highlighting.
                </p>

                <h3>Set cursorline: <code>set cursorline</code></h3>
                <p class="list-paragraph">
                  Highlights the line your cursor is on.
                </p>

                <h3>Tab length: <code>set tabstop=4</code></h3>
                <p class="list-paragraph">
                  Sets tab length to four characters. <code>set tabstop=2</code> is also good if you indent a lot.
                </p>

                <h3>Auto Indenting: <code>set autoindent</code></h3>
                <p class="list-paragraph">
                  Autmoatically indents proper amount while inside a block of code.
                </p>

                <h3>Tabs &amp; Spaces: <code>set expandtab</code></h3>
                <p class="list-paragraph">
                  Make all tabs use spaces, rather than the tab character.
                </p>

                <h3>Line Measure: <code>set colorcolumn 100</code></h3>
                <p class="list-paragraph">
                  Adds a line measure at the 100th character mark. It's helpful to know when a line of code is
                  getting too long.
                </p>

                <h3>Realtime Highlight search: <code>set incrsearch</code> <code> set hlsearch</code></h3>
                <p class="list-paragraph">
                  <code>set incrseach</code> will highlight code as you search for a phrase, but won't keep the phrase
                   highlighted after you're done searching. Thus, using <code>set hlsearch</code> allows the search
                   phrase to stay highlighted after you exit search mode. Turning on both settings creates for a normal
                    feeling search.
                </p>

                <h3>Non-case Sensistive Commands: <code>command Wq wq</code></h3>
                <p class="list-paragraph">
                  When trying to save in vim, you normally must type <code>:w</code>. Similarly, to save and quit, you
                  must type <code>:wq</code>. If you're as bad at typing as I am, then allowing for <code>:w</code> to
                  become <code>:W</code> and <code>:wq</code> to become <code>:WQ</code> (and or <code>:Wq</code>)
                  will make those frustrating moments slightly less infuriating.
                </p>
              </div>

              <div id="example-vimrc">
                <h2> Example Raw .vimrc File</h2>
                <p> Feel free to reuse this example <code>.vimrc</code> for your own use.

              <div class="code-block"><pre>
    <span class="comment">" Author: Your Name</span>
    " File: .vimrc

    " turn on line numbers
    <span class="keyword">set</span> number

    " turn on mouse
    set mouse=a

    " turn on syntax highlighting
    syntax on

    " highlight the line your cursor is on
    set cursorline

    " set tab length to 4
    set tabstop=4

    " autoindent inside code blocks
    set autoindent

    " make all tabs spaces
    set expandtab

    " line measure at character 100
    set colorcolumn 100

    " highlight search
    set incsearch
    set hlsearch

    " non-case sensitive saving &amp; quit commands
    command WQ wq
    command Wq wq
    command W w
    command Q q</pre></div>
      </div>
    </div>
  </div>
    `;
  }
}


customElements.define('view-vimrc-starter-kit', BlogVimrcStarterKit);