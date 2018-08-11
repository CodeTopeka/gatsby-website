import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "emotion"

export default ({ data }) => (
  <Layout>
    <div className={css`
        margin: 0 auto;
        max-width: 800px;

    `}>
        <h1 id="trajectories">Holm School Curriculum (alpha version)</h1>
        <a href="https://github.com/HolmSchool/curriculum">Edit/Contribute via github</a>
        <p>&nbsp;</p>
    </div>
    <div className={css`
        margin: 0 auto;
        max-width: 800px;
        background-color: #b5e6e6;
    `}>
        
        <ul>
        <li>
            <h2 id="beginning-raspberry-pi">Beginning Raspberry PI</h2>
            <ul>
            <li>
                <h3 id="setting-up-your-raspberry-piinstalling-raspbian">Setting Up Your Raspberry Pi/Installing Raspbian</h3>
            </li>
            <li>
                <h3 id="using-apt-getupdating-systeminstalling-chromium">Using apt-get/updating system/installing chromium</h3>
            </li>
            <li>
                <h3 id="installing-gnome">Installing GNOME</h3>
            </li>
            <li>
                <h3 id="command-line-introduction">Command Line Introduction</h3>
                <ul>
                <li>Introduction to the Command Line - Launch School (OER)
                    <ul>
                    <li><a href="https://launchschool.com/books/command_line">site</a></li>
                    </ul>
                </li>
                <li>Linux Basics: The Command Line Interface - Darthmouth (mooc)
                    <ul>
                    <li><a href="https://www.edx.org/course/linux-basics-the-command-line-interface">edx</a></li>
                    </ul>
                </li>
                <li>Introduction to Linux (mooc)
                    <ul>
                    <li><a href="https://www.edx.org/course/introduction-linux-linuxfoundationx-lfs101x-1">edX</a></li>
                    </ul>
                </li>
                </ul>
            </li>
            <li>
                <h3 id="installing-visual-studio-code">Installing Visual Studio Code</h3>
                <ul>
                <li>Tutorial on VS Code</li>
                </ul>
            </li>
            <li>
                <h3 id="advanced-command-line">Advanced Command Line</h3>
                <ul>
                <li>Just Enough Linux - Malcolm Maclean (OER)
                    <ul>
                    <li><a href="https://leanpub.com/jelinux/read">site</a></li>
                    </ul>
                </li>
                <li>Conquering the Command Line - Mark Bates
                    <ul>
                    <li><a href="http://conqueringthecommandline.com/book">site</a></li>
                    </ul>
                </li>
                <li>The Linux Command Line - William Shotts (OER)
                    <ul>
                    <li><a href="http://linuxcommand.org/tlcl.php">site</a></li>
                    </ul>
                </li>
                </ul>
            </li>
            <li>
                <h3 id="installing-programming-languages">Installing Programming Languages</h3>
                <ul>
                <li>Tips on debugging</li>
                </ul>
            </li>
            <li>
                <h3 id="github">Github</h3>
                <ul>
                <li>A Guide to Git and Github - Launch School (OER)
                    <ul>
                    <li><a href="https://launchschool.com/books/git">site</a></li>
                    </ul>
                </li>
                </ul>
            </li>
            <li>
                <h3 id="nanovim">Nano/VIM</h3>
            </li>
            <li>
                <h3 id="special-note-for-public-library-students">Special Note for Public Library Students</h3>
                <ul>
                <li>Cloud IDE</li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="beginning-programming">Beginning Programming</h2>
            <ul>
            <li>
                <h3 id="crash-course-computer-science-youtube">Crash Course Computer Science (youtube)</h3>
                <ul>
                <li><a href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo">playlist</a></li>
                </ul>
            </li>
            <li>
                <h3 id="snap">Snap!</h3>
                <ul>
                <li>
                    <h4 id="beauty-and-joy-of-computing-mooc">Beauty and Joy of Computing (mooc)</h4>
                    <ul>
                    <li>edx (<a href="https://www.edx.org/course/beauty-joy-computing-apr-cs-principles-uc-berkeleyx-bjc-12x-0">first half</a>) (<a href="https://www.edx.org/course/beauty-joy-computing-apr-cs-principles-uc-berkeleyx-bjc-34x-0">second half</a>)</li>
                    <li><a href="https://bjc.edc.org/bjc-r/course/bjc4nyc.html">tutorial</a></li>
                    </ul>
                </li>
                </ul>
            </li>
            <li>
                <h3 id="scratch">Scratch</h3>
            </li>
            <li>
                <h3 id="puredata">PureData</h3>
                <ul>
                <li>PURE DATA - cheetomoskeeto (Youtube)
                    <ul>
                    <li><a href="https://www.youtube.com/watch?v=rtgGol-I4gA&amp;list=PL12DC9A161D8DC5DC">playlist</a></li>
                    </ul>
                </li>
                <li>Learning Synthesis with Pure Data - LWM Music (youtube)
                    <ul>
                    <li><a href="https://www.youtube.com/watch?v=Fx5nTjUrK-g&amp;list=PLQpnOqsrcBuq3JVvn4nQP90jv_rAs2cDQ">playlist</a></li>
                    </ul>
                </li>
                <li>Pure Data - FLOSS Manuals <a href="http://write.flossmanuals.net/pure-data/introduction2/">tutorial</a></li>
                <li>Designing Sound - Andy Farnell <a href="http://dm.ncl.ac.uk/courseblog/files/2011/02/pd_intro.pdf">pdf</a></li>
                <li>Programming Electronic Music in Pd - Johannes Kreidler <a href="http://www.pd-tutorial.com/">pdf</a></li>
                </ul>
            </li>
            <li>
                <h3 id="sonicpi">SonicPi</h3>
                <ul>
                <li>Introduction to Sonic Pi - Dave Conservatoire 
            - <a href="https://www.youtube.com/watch?v=4BPKaHV7Q5U&amp;list=PLaitaNxyd8SHvTQjRGnMdKLsARXW7iYyp">playlist</a></li>
                <li>Davids Fiddle <a href="https://www.youtube.com/watch?v=oRB561XNSIM&amp;list=PLxJoOXhg8m5LbBzczDCeZ4wzky1K578SS">playlist</a></li>
                <li>Getting Started With Sonic Pi - Raspberry Pi Foundation <a href="https://projects.raspberrypi.org/en/projects/getting-started-with-sonic-pi/">tutorial</a></li>
                <li>Creative programming workshop with Sonic Pi - mehackit <a href="http://sonic-pi.mehackit.org/exercises/en/01-introduction/01-introduction.html">tutorial</a></li>
                <li>Sonic Pi Tutorial <a href="https://sonic-pi.net/tutorial.html">tutorial</a></li>
                </ul>
            </li>
            <li>
                <h3 id="processing">Processing</h3>
                <ul>
                <li>
                    <h4 id="introduction-to-processing---raspberry-pi-foundation">Introduction to Processing - Raspberry Pi Foundation</h4>
                    <ul>
                    <li><a href="https://projects.raspberrypi.org/en/projects/introduction-to-processing">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="learning-processing-a-beginners-guide-to-programming-images-animation-and-interaction---shiffman-youtube">Learning Processing: A Beginner’s Guide to Programming Images, Animation, and Interaction - shiffman (youtube)</h4>
                    <ul>
                    <li><a href="https://www.youtube.com/user/shiffman/playlists?shelf_id=2&amp;view=50&amp;sort=dd">playlist</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="the-nature-of-code---daniel-shiffman-oer">The Nature of Code - Daniel Shiffman (OER)</h4>
                    <ul>
                    <li><a href="https://natureofcode.com/book/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="the-nature-of-code---shiffman-youtube">The Nature of Code - shiffman (youtube)</h4>
                    <ul>
                    <li><a href="https://www.youtube.com/user/shiffman/playlists?shelf_id=6&amp;view=50&amp;sort=dd">playlist</a></li>
                    </ul>
                </li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="liberal-arts-break">Liberal Arts Break</h2>
            <ul>
            <li>
                <h3 id="the-iliad---homer-public-domain">The Iliad - Homer (public domain)</h3>
                <ul>
                <li><a href="http://www.gutenberg.org/ebooks/2199">site</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="beginning-languages">Beginning Languages</h2>
            <ul>
            <li>
                <h3 id="c">C</h3>
                <ul>
                <li>
                    <h4 id="learn-to-code-with-c---the-magpi-essentials-oer">Learn to Code With C - The MagPi Essentials (OER)</h4>
                    <ul>
                    <li><a href="https://www.raspberrypi.org/magpi-issues/Essentials_C_v1.pdf">pdf</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="cs50-mooc">CS50 (mooc)</h4>
                    <ul>
                    <li><a href="https://www.edx.org/course/cs50s-introduction-computer-science-harvardx-cs50x">edx</a></li>
                    <li><a href="http://cs50.net">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="the-gnu-c-programming-tutorial---mark-burgess-and-ron-hale-evans-oer">The GNU C Programming Tutorial - Mark Burgess and Ron Hale-Evans (OER)</h4>
                    <ul>
                    <li><a href="http://www.crasseux.com/books/ctut.pdf">pdf</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="beejs-guide-to-c-programming-oer">Beej’s Guide to C Programming (OER)</h4>
                    <ul>
                    <li><a href="http://beej.us/guide/bgc/html/single/bgc.html">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="c-programming-modular-programming-and-memory-management---dartmouth-mooc">C Programming: Modular Programming and Memory Management - Dartmouth (mooc)</h4>
                    <ul>
                    <li><a href="https://www.edx.org/course/modular-programming-and-memory-management">edx</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="c-programming-exercises-practice-solution-problemset">C Programming Exercises, Practice, Solution (problemset)</h4>
                    <ul>
                    <li><a href="https://www.w3resource.com/c-programming-exercises/">exercises</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="modern-c---jens-gustedt">Modern C - Jens Gustedt</h4>
                    <ul>
                    <li><a href="http://icube-icps.unistra.fr/img_auth.php/d/db/ModernC.pdf">pdf</a></li>
                    </ul>
                </li>
                </ul>
            </li>
            <li>
                <h3 id="javascript">JavaScript</h3>
                <ul>
                <li>
                    <h3 id="khan-academy-js-tutorials">Khan Academy JS Tutorials</h3>
                    <ul>
                    <li><a href="https://www.khanacademy.org/computing/computer-programming/programming">tut1</a> <a href="https://www.khanacademy.org/computing/computer-programming/programming-games-visualizations">tut2</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="how-to-install-node-to-run-your-scripts-hs-youtube">How to install node to run your scripts (HS youtube)</h4>
                </li>
                <li>
                    <h4 id="you-dont-know-js---kyle-simpson-oer">You Don’t Know JS - Kyle Simpson (OER)</h4>
                    <ul>
                    <li><a href="https://github.com/getify/You-Dont-Know-JS">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="eloquent-js---marijn-haverbeke-oer">Eloquent JS - Marijn Haverbeke (OER)</h4>
                    <ul>
                    <li><a href="http://eloquentjavascript.net/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="javascript-enlightenment---cody-lindley-oer">JavaScript Enlightenment - Cody Lindley (OER)</h4>
                    <ul>
                    <li><a href="http://www.javascriptenlightenment.com/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="the-complete-guide-to-modern-javascript---alberto-montalesi-oer">The Complete Guide to Modern JavaScript - Alberto Montalesi (OER)</h4>
                    <ul>
                    <li><a href="https://github.com/AlbertoMontalesi/The-complete-guide-to-modern-JavaScript-from-es2015-to-es2018">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="understanding-ecmascript-6---nicholas-c-zakas">Understanding ECMAScript 6 - Nicholas C. Zakas</h4>
                    <ul>
                    <li><a href="https://github.com/nzakas/understandinges6">site</a></li>
                    </ul>
                </li>
                </ul>
            </li>
            <li>
                <h3 id="python">Python</h3>
                <ul>
                <li>
                    <h4 id="python-for-everybody---charles-r-severance-oer">Python for Everybody - Charles R. Severance (OER)</h4>
                    <ul>
                    <li><a href="https://py4e.com/book.php">site</a></li>
                    <li><a href="https://www.coursera.org/specializations/python">mooc</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="automate-the-boring-stuff---al-sweigart-oer">Automate the Boring Stuff - Al Sweigart (OER)</h4>
                    <ul>
                    <li><a href="http://automatetheboringstuff.com/chapter0/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="how-to-think-like-a-computer-scientist---allen-b-downey-oer">How to Think Like a Computer Scientist - Allen B. Downey (OER)</h4>
                    <ul>
                    <li><a href="http://interactivepython.org/courselib/static/thinkcspy/index.html">site</a></li>
                    <li><a href="https://digitalcommons.plymouth.edu/oer/16/">Intro Programming Lecture Notes by Kyle Burke</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="python-for-you-and-me---kushal-das-oer">Python for you and me - Kushal Das (OER)</h4>
                    <ul>
                    <li><a href="http://pymbook.readthedocs.io/en/py3/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="composing-programs---john-denero-oer">Composing Programs - John DeNero (OER)</h4>
                    <ul>
                    <li><a href="http://composingprograms.com/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="sicp-in-python---john-denero-oer">SICP in Python - John Denero (OER)</h4>
                    <ul>
                    <li><a href="http://www-inst.eecs.berkeley.edu/~cs61a/sp12/book/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="introduction-to-programming-in-python---robert-sedgewick-kevin-wayne-oer">Introduction to Programming in Python - Robert Sedgewick, Kevin Wayne (OER)</h4>
                    <ul>
                    <li><a href="https://introcs.cs.princeton.edu/python/home/">site</a></li>
                    </ul>
                </li>
                </ul>
            </li>
            <li>
                <h3 id="java">Java</h3>
                <ul>
                <li>
                    <h4 id="java-programming-for-kids---yakov-fain-oer">Java Programming for Kids - Yakov Fain (OER)</h4>
                    <ul>
                    <li><a href="https://yfain.github.io/Java4Kids/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="introduction-to-computer-science-using-java---bradley-kjell-oer">Introduction to Computer Science using Java - Bradley Kjell (OER)</h4>
                    <ul>
                    <li><a href="http://www.programmedlessons.org/Java9/index.html">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="introduction-to-programming-using-java---david-j-eck-oer">Introduction to Programming Using Java - David J. Eck (OER)</h4>
                    <ul>
                    <li><a href="http://math.hws.edu/javanotes/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="ap-computer-science-a-java-programming---purdue-mooc">AP Computer Science A: Java Programming - Purdue (mooc)</h4>
                    <ul>
                    <li><a href="https://www.edx.org/course/ap-computer-science-a-java-programming">part1</a> <a href="https://www.edx.org/course/ap-computer-science-java-programming-purduex-cs180-2x-0">part2</a> <a href="https://www.edx.org/course/ap-computer-science-java-programming-purduex-cs180-3x-0">part3</a> <a href="https://www.edx.org/course/ap-computer-science-java-programming-purduex-cs180-4x-0">part4</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="computer-science-an-interdisciplinary-approach---robert-sedgewick-kevin-wayne-oer">Computer Science: An Interdisciplinary Approach - Robert Sedgewick, Kevin Wayne (OER)</h4>
                    <ul>
                    <li><a href="https://introcs.cs.princeton.edu/java/home/">site</a></li>
                    </ul>
                </li>
                </ul>
            </li>
            <li>
                <h3 id="htmlcss">HTML/CSS</h3>
                <ul>
                <li>
                    <h3 id="khan-academy-html-tutorials">Khan Academy HTML Tutorials</h3>
                    <ul>
                    <li><a href="https://www.khanacademy.org/computing/computer-programming/html-css">tut1</a> <a href="https://www.khanacademy.org/computing/computer-programming/html-css-js">tut2</a> <a href="https://www.khanacademy.org/computing/computer-programming/html-js-jquery">tut3</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="html-beginner-tutorial">HTML Beginner Tutorial</h4>
                    <ul>
                    <li><a href="http://www.htmldog.com/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="how-to-code-in-html5-and-css3---damian-wielgosik-oer">How to Code in HTML5 and CSS3 - Damian Wielgosik (OER)</h4>
                    <ul>
                    <li><a href="http://howtocodeinhtml.com/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="a-free-html--css-tutorial---marksheetio">A Free HTML &amp; CSS Tutorial - MarkSheet.io</h4>
                    <ul>
                    <li><a href="https://marksheet.io/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="learn-css-layout">Learn CSS Layout</h4>
                    <ul>
                    <li><a href="http://learnlayout.com/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="a-beginners-guide-to-htmlcss---shay-howe-oer">A beginner’s guide to HTML&amp;CSS - Shay Howe (OER)</h4>
                    <ul>
                    <li><a href="https://learn.shayhowe.com/html-css/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="learn-to-code-advanced-html--css---shay-howe-oer">Learn to Code Advanced HTML &amp; CSS - Shay Howe (OER)</h4>
                    <ul>
                    <li><a href="https://learn.shayhowe.com/advanced-html-css/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="dive-into-html5---mark-pilgrim-oer">Dive Into HTML5 - Mark Pilgrim (OER)</h4>
                    <ul>
                    <li><a href="http://diveinto.html5doctor.com/">site</a></li>
                    </ul>
                </li>
                </ul>
            </li>
            <li>
                <h3 id="c-1">C++</h3>
                <ul>
                <li>
                    <h4 id="learncppcom">LearnCpp.com</h4>
                    <ul>
                    <li><a href="http://www.learncpp.com/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="cpluspluscom">Cplusplus.com/</h4>
                    <ul>
                    <li><a href="http://www.cplusplus.com/doc/tutorial/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="the-rooks-guide-to-c---jeremy-a-hansen-oer">The Rook’s Guide to C++ - Jeremy A. Hansen (OER)</h4>
                    <ul>
                    <li><a href="https://rooksguide.org/2013/11/26/version-1-0-is-out/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="programming-abstractions-in-c---eric-s-roberts-oer">Programming Abstractions in C++ - Eric S. Roberts (OER)</h4>
                    <ul>
                    <li><a href="http://web.stanford.edu/class/cs106x/">site</a></li>
                    <li><a href="http://web.stanford.edu/class/cs106x/res/reader/CS106BX-Reader.pdf">pdf</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="oo-programming-in-c---summer-2013---itu-ocw">OO Programming in C++ - Summer 2013 - ITU (OCW)</h4>
                    <ul>
                    <li><a href="https://www.youtube.com/playlist?list=PLMMZ6bhZ4H68r2YVCy111_uIxytu3_HNi">playlist</a></li>
                    </ul>
                </li>
                </ul>
            </li>
            <li>
                <h3 id="language-agnostic">Language Agnostic</h3>
                <ul>
                <li>
                    <h4 id="programming-fundamentals-a-modular-structured-approach---kenneth-leroy-busbee-and-dave-braunschweig-oer">Programming Fundamentals: A Modular Structured Approach - Kenneth Leroy Busbee and Dave Braunschweig (OER)</h4>
                    <ul>
                    <li><a href="https://press.rebus.community/programmingfundamentals/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="learn-programming---antti-salonen-oer">Learn Programming - Antti Salonen (OER)</h4>
                    <ul>
                    <li><a href="https://progbook.org/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="how-to-design-programs---matthias-felleisen-robert-bruce-findler-matthew-flatt-shriram-krishnamurthi-oer">How to Design Programs - Matthias Felleisen, Robert Bruce Findler, Matthew Flatt, Shriram Krishnamurthi (OER)</h4>
                    <ul>
                    <li><a href="https://htdp.org/">site</a></li>
                    </ul>
                </li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="liberal-arts-break-1">Liberal Arts Break</h2>
            <ul>
            <li>
                <h3 id="the-origin-of-species-by-means-of-natural-selection---charles-darwin-public-domain">The Origin of Species by Means of Natural Selection - Charles Darwin (public domain)</h3>
                <ul>
                <li><a href="https://www.gutenberg.org/ebooks/2009">site</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="computer-architectureorganizationassembly">Computer Architecture/Organization/Assembly</h2>
            <ul>
            <li>
                <h3 id="introduction-to-digital-electronics---neso-academy">Introduction to Digital Electronics - Neso Academy</h3>
                <ul>
                <li><a href="https://www.youtube.com/watch?v=M0mx8S05v60&amp;list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm">playlist</a></li>
                </ul>
            </li>
            <li>
                <h3 id="introduction-to-computer-organization-arm-assembly-language-using-the-raspberry-pi---robert-g-plantz">Introduction to Computer Organization: ARM Assembly Language Using the Raspberry Pi - Robert G. Plantz</h3>
                <ul>
                <li><a href="http://bob.cs.sonoma.edu/IntroCompOrg-RPi/intro-co-rpi.html">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="computer-science-61c---berkeley-ocw">Computer Science 61C - Berkeley (OCW)</h3>
                <ul>
                <li><a href="http://inst.eecs.berkeley.edu/~cs61c/sp15/">site</a></li>
                <li><a href="https://archive.org/details/ucberkeley-webcast-PL-XXv-cvA_iCl2-D-FS5mk0jFF6cYSJs_">archive</a></li>
                </ul>
            </li>
            <li>
                <h3 id="computer-architecture---carnegie-mellon-ocw">Computer Architecture - Carnegie Mellon (OCW)</h3>
                <ul>
                <li><a href="https://www.youtube.com/watch?v=zLP_X4wyHbY&amp;list=PL5PHm2jkkXmi5CxxI7b3JCL1TWybTDtKq">playlist</a></li>
                <li><a href="http://www.ece.cmu.edu/~ece447/s15/doku.php?id=schedule">slides</a></li>
                </ul>
            </li>
            <li>
                <h3 id="computation-structures-2-computer-architecture---mit-mooc">Computation Structures 2: Computer Architecture - MIT (mooc)</h3>
                <ul>
                <li><a href="https://www.edx.org/course/computation-structures-2-computer-mitx-6-004-2x">coursera</a></li>
                </ul>
            </li>
            <li>
                <h3 id="nand2tetris">NAND2Tetris</h3>
                <ul>
                <li><a href="https://www.nand2tetris.org/">site</a></li>
                <li><a href="https://www.nand2tetris.org/">coursera1</a> <a href="https://www.coursera.org/learn/nand2tetris2">coursera2</a></li>
                <li><a href="https://archive.org/details/TheElementsOfComputingSystems_201408">pdf</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="discrete-mathematicsstructures">Discrete Mathematics/Structures</h2>
            <ul>
            <li>
                <h3 id="book-of-proof---richard-hammack-oer">Book of Proof - Richard Hammack (OER)</h3>
                <ul>
                <li><a href="https://www.people.vcu.edu/~rhammack/BookOfProof/">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="introduction-to-proofs---jim-hefferon-oer">Introduction to Proofs - Jim Hefferon (OER)</h3>
                <ul>
                <li><a href="http://joshua.smcvt.edu/proofs/">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="discrete-mathematics---shanghai-jiao-tong-university-mooc">Discrete Mathematics - Shanghai Jiao Tong University (mooc)</h3>
                <ul>
                <li><a href="https://www.coursera.org/learn/discrete-mathematics">coursera</a></li>
                </ul>
            </li>
            <li>
                <h3 id="introduction-to-discrete-mathematics-for-computer-science-specialization-mooc">Introduction to Discrete Mathematics for Computer Science Specialization (mooc)</h3>
                <ul>
                <li><a href="https://www.coursera.org/specializations/discrete-mathematics">coursera</a></li>
                </ul>
            </li>
            <li>
                <h3 id="discrete-structures-for-computer-science-counting-recursion-and-probability---michiel-smid-oer">Discrete Structures for Computer Science: Counting, Recursion, and Probability - Michiel Smid (OER)</h3>
                <ul>
                <li><a href="http://cglab.ca/~michiel/DiscreteStructures/">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="computer-science-70-001---spring-2015---berkeley-ocw">Computer Science 70, 001 - Spring 2015 - Berkeley (OCW)</h3>
                <ul>
                <li><a href="https://archive.org/details/ucberkeley-webcast-PL-XXv-cvA_iD8wQm8U0gG_Z1uHjImKXFy">archive</a></li>
                </ul>
            </li>
            <li>
                <h3 id="discrete-mathematics---arsdigita-ocw">Discrete Mathematics - Arsdigita (OCW)</h3>
                <ul>
                <li><a href="https://www.youtube.com/playlist?list=PL6pCe7tRct-hEgOxlFzXxQRba_I4zIP4j">playlist</a></li>
                </ul>
            </li>
            <li>
                <h3 id="mathematics-for-computer-science---mit-ocw">Mathematics for Computer Science - MIT (OCW)</h3>
                <ul>
                <li><a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2010/">site</a></li>
                <li><a href="https://courses.csail.mit.edu/6.042/spring17/mcs.pdf">pdf</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="algorithms">Algorithms</h2>
            <ul>
            <li>
                <h3 id="algorithms-design-and-analysis---stanford-ocw">Algorithms: Design and Analysis - Stanford (OCW)</h3>
                <ul>
                <li><a href="https://lagunita.stanford.edu/courses/course-v1:Engineering+Algorithms1+SelfPaced/about">part1</a> <a href="https://lagunita.stanford.edu/courses/course-v1:Engineering+Algorithms2+SelfPaced/about">part2</a></li>
                </ul>
            </li>
            <li>
                <h3 id="foundations-of-computer-science---al-aho-jeff-ullman-oer">Foundations of Computer Science - Al Aho, Jeff Ullman (OER)</h3>
                <ul>
                <li><a href="http://infolab.stanford.edu/~ullman/focs.html">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="think-complexity---allen-b-downey-oer">Think Complexity - Allen B. Downey (OER)</h3>
                <ul>
                <li><a href="http://greenteapress.com/complexity/">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="problem-solving-with-algorithms-and-data-structures-using-python---brad-miller-and-david-ranum-oer">Problem Solving with Algorithms and Data Structures using Python - Brad Miller and David Ranum (OER)</h3>
                <ul>
                <li><a href="http://interactivepython.org/runestone/static/pythonds/index.html">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="cse373-analysis-of-algorithms---stonybook-university-ocw">CSE373: Analysis of Algorithms - Stonybook University (OCW)</h3>
                <ul>
                <li><a href="https://www.youtube.com/watch?v=A2bFN3MyNDA&amp;list=PLOtl7M3yp-DX32N0fVIyvn7ipWKNGmwpp">playlist</a></li>
                </ul>
            </li>
            <li>
                <h3 id="algorithms-specialization---stanford-mooc">Algorithms Specialization - Stanford (mooc)</h3>
                <ul>
                <li><a href="https://www.coursera.org/specializations/algorithms">coursera</a></li>
                </ul>
            </li>
            <li>
                <h3 id="algorithms---princeton-university-mooc">Algorithms - Princeton University (mooc)</h3>
                <ul>
                <li>coursera <a href="https://www.coursera.org/learn/algorithms-part1">firstHalf</a> <a href="https://www.coursera.org/learn/algorithms-part2">secondHalf</a></li>
                <li><a href="https://algs4.cs.princeton.edu/home/">textbook</a></li>
                </ul>
            </li>
            <li>
                <h3 id="algorithms---s-dasgupta-c-h-papadimitriou-and-u-v-vazirani-oer">Algorithms - S. Dasgupta, C. H. Papadimitriou, and U. V. Vazirani (OER)</h3>
                <ul>
                <li><a href="http://algorithmics.lsi.upc.edu/docs/Dasgupta-Papadimitriou-Vazirani.pdf">pdf</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="data-structures">Data Structures</h2>
            <ul>
            <li>
                <h3 id="notes-on-data-structures-and-programming-techniques---yale-oer">Notes on Data Structures and Programming Techniques - Yale (OER)</h3>
                <ul>
                <li><a href="http://www.cs.yale.edu/homes/aspnes/classes/223/notes.html">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="open-data-structures---pat-morin-oer">Open Data Structures - Pat Morin (OER)</h3>
                <ul>
                <li><a href="http://opendatastructures.org/">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="cs-61b-data-structures---berkeley-ocw">CS 61B Data Structures - Berkeley (OCW)</h3>
                <ul>
                <li><a href="https://sp18.datastructur.es/">site</a></li>
                <li><a href="https://archive.org/details/ucberkeley-webcast-PL4BBB74C7D2A1049C?sort=titleSorter">archive video</a></li>
                </ul>
            </li>
            <li>
                <h3 id="introduction-to-algorithms---mit-ocw">Introduction to Algorithms - MIT (OCW)</h3>
                <ul>
                <li><a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/">site</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="liberal-arts-break-2">Liberal Arts Break</h2>
            <ul>
            <li>
                <h3 id="the-house-of-mirth---edith-wharton-public-domain">The House of Mirth - Edith Wharton (public domain)</h3>
                <ul>
                <li><a href="http://www.gutenberg.org/ebooks/284">site</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="databases">Databases</h2>
            <ul>
            <li>
                <h3 id="khan-academy-sql-tutorials">Khan Academy SQL Tutorials</h3>
                <ul>
                <li><a href="https://www.khanacademy.org/computing/computer-programming/sql">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="introduction-to-sql---launch-school-oer">Introduction to SQL - Launch School (OER)</h3>
                <ul>
                <li><a href="https://launchschool.com/books/sql">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="computer-science-186-spring-2015---uc-berekeley-ocw">Computer Science 186, Spring 2015 - UC Berekeley (OCW)</h3>
                <ul>
                <li><a href="https://archive.org/details/UCBerkeley_Course_Computer_Science_186">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="stanford-online-databases-ocw">Stanford Online Databases (OCW)</h3>
                <ul>
                <li><a href="https://lagunita.stanford.edu/courses/Home/Databases/Engineering/about">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="database-design---adrienne-watt">Database Design - Adrienne Watt</h3>
                <ul>
                <li><a href="https://opentextbc.ca/dbdesign01/">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="cs403-introduction-to-modern-database-systems---saylor-oer">CS403: INTRODUCTION TO MODERN DATABASE SYSTEMS - Saylor (OER)</h3>
                <ul>
                <li><a href="https://learn.saylor.org/course/cs403">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="cs410-advanced-databases---saylor-oer">CS410: ADVANCED DATABASES - Saylor (OER)</h3>
                <ul>
                <li><a href="https://learn.saylor.org/course/cs410">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="the-postgresql-tutorial">The PostgreSQL Tutorial</h3>
                <ul>
                <li><a href="https://www.postgresql.org/docs/current/static/tutorial.html">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="postgresql-tutorial">PostgreSQL Tutorial</h3>
                <ul>
                <li><a href="http://www.postgresqltutorial.com/">site</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="intermediate-programming">Intermediate Programming</h2>
            <ul>
            <li>
                <h3 id="node">Node</h3>
                <ul>
                <li>
                    <h4 id="what-you-need-to-know-about-nodejs---bruno-joseph-dmello-oer">What You Need To Know About Node.js - Bruno Joseph Dmello (OER)</h4>
                    <ul>
                    <li><a href="https://www.packtpub.com/packt/free-ebook/what-you-need-know-about-nodejs">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="mixus-node-book">Mixu’s Node book</h4>
                    <ul>
                    <li><a href="http://book.mixu.net/node/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="nodejs-succinctly---emanuele-delbono-oer">Node.js Succinctly - Emanuele DelBono (OER)</h4>
                    <ul>
                    <li><a href="https://www.syncfusion.com/ebooks/nodejs">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="nodejs-guides">Node.js Guides</h4>
                    <ul>
                    <li><a href="https://nodejs.org/en/docs/guides/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="the-little-mongodb-book---skarl-seguin-oer">The Little MongoDB Book - SKarl Seguin (OER)</h4>
                    <ul>
                    <li><a href="https://www.openmymind.net/2011/3/28/The-Little-MongoDB-Book/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="software-development-capstone-project---the-university-of-british-columbia-mooc">Software Development Capstone Project - The University of British Columbia (mooc)</h4>
                    <ul>
                    <li><a href="https://www.edx.org/course/software-development-capstone-project-ubcx-softengprjx">edX</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="server-side-development-with-nodejs-express-and-mongodb---the-hong-kong-university-of-science-and-technology-mooc">Server-side Development with NodeJS, Express and MongoDB - The Hong Kong University of Science and Technology (mooc)</h4>
                    <ul>
                    <li><a href="https://www.coursera.org/learn/server-side-nodejs">coursera</a></li>
                    </ul>
                </li>
                </ul>
            </li>
            <li>
                <h3 id="go">Go</h3>
                <p>-</p>
            </li>
            <li>
                <h3 id="clojure">Clojure</h3>
            </li>
            <li>
                <h3 id="django">Django</h3>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="linear-algebra">Linear Algebra</h2>
            <ul>
            <li>
                <h3 id="essence-of-linear-algebra---3blue1brown-youtube">Essence of linear algebra - 3Blue1Brown (youtube)</h3>
                <ul>
                <li><a href="https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab">playlist</a></li>
                </ul>
            </li>
            <li>
                <h3 id="linear-algebra---khan-academy-youtube">Linear Algebra - Khan Academy (youtube)</h3>
                <ul>
                <li><a href="https://www.khanacademy.org/math/linear-algebra">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="mathematics-for-machine-learning-linear-algebra-mooc">Mathematics for Machine Learning: Linear Algebra (mooc)</h3>
                <ul>
                <li><a href="https://www.coursera.org/learn/linear-algebra-machine-learning">coursera</a></li>
                </ul>
            </li>
            <li>
                <h3 id="linear-algebra-foundations-to-frontiers---the-university-of-texas-at-austin-mooc">Linear Algebra: Foundations to Frontiers - The University of Texas at Austin (mooc)</h3>
                <ul>
                <li><a href="https://www.edx.org/course/linear-algebra-foundations-to-frontiers">coursera</a></li>
                </ul>
            </li>
            <li>
                <h3 id="linear-algebra---jimm-hefferon-oer">Linear Algebra - Jimm Hefferon (OER)</h3>
                <ul>
                <li><a href="http://joshua.smcvt.edu/linearalgebra/">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="linear-algebra---mit-ocw">Linear Algebra - MIT (OCW)</h3>
                <ul>
                <li><a href="https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/video-lectures/">site</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="networks">Networks</h2>
            <ul>
            <li>
                <h3 id="introduction-to-http---launch-school-oer">Introduction to HTTP - Launch School (OER)</h3>
                <ul>
                <li><a href="https://launchschool.com/books/http">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="an-introduction-to-computer-networks---peter-l-dordal-oer">An Introduction to Computer Networks - Peter L Dordal (OER)</h3>
                <ul>
                <li><a href="http://intronetworks.cs.luc.edu/">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="introduction-to-computer-networking---stanford-ocw">Introduction to Computer Networking - Stanford (OCW)</h3>
                <ul>
                <li><a href="https://lagunita.stanford.edu/courses/Engineering/Networking-SP/SelfPaced/about">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="introduction-to-data-communications---steven-gordon-ocw">Introduction to Data Communications - Steven Gordon (OCW)</h3>
                <ul>
                <li><a href="https://www.youtube.com/playlist?list=PLvifRcqOOwF8u4iC7hFTMVC_WD6SEpnkx">site</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="operating-systems">Operating Systems</h2>
            <ul>
            <li>
                <h3 id="operating-systems-three-easy-pieces---remzi-h-arpaci-dusseau-andrea-c-arpaci-dusseau-oer">Operating Systems: Three Easy Pieces - Remzi H. Arpaci-Dusseau, Andrea C. Arpaci-Dusseau (OER)</h3>
                <ul>
                <li><a href="http://pages.cs.wisc.edu/~remzi/OSTEP/">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="cs-162-operating-systems-spring-2015---berkeley-ocw">CS 162 Operating Systems, Spring 2015 - Berkeley (OCW)</h3>
                <ul>
                <li><a href="https://archive.org/details/ucberkeley-webcast-PL-XXv-cvA_iBDyz-ba4yDskqMDY6A1w_c">archive</a></li>
                </ul>
            </li>
            <li>
                <h3 id="ops-classorg-ocw">ops-class.org (OCW)</h3>
                <ul>
                <li><a href="https://www.ops-class.org/">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="xv6-a-simple-unix-like-teaching-operating-system---mit-oss">Xv6, a simple Unix-like teaching operating system - MIT (OSS)</h3>
                <ul>
                <li><a href="https://pdos.csail.mit.edu/6.828/2016/xv6.html">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="learning-operating-system-development-using-linux-kernel-and-raspberry-pi---sergey-matyukevich-oss">Learning operating system development using Linux kernel and Raspberry Pi - Sergey Matyukevich (OSS)</h3>
                <ul>
                <li><a href="https://github.com/s-matyukevich/raspberry-pi-os">github</a></li>
                </ul>
            </li>
            <li>
                <h3 id="building-an-operating-system-for-the-raspberry-pi---jsandler18-oss">Building an Operating System for the Raspberry Pi - jsandler18 (OSS)</h3>
                <ul>
                <li><a href="https://jsandler18.github.io/">github</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="liberal-arts-break-3">Liberal Arts Break</h2>
            <ul>
            <li>
                <h3 id="a-dolls-house---henrik-ibsen-public-domain">A Doll’s House - Henrik Ibsen (public domain)</h3>
                <ul>
                <li><a href="http://www.gutenberg.org/ebooks/2542">site</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="software-designdevelopment">Software Design/Development</h2>
            <ul>
            <li>
                <h3 id="software-architecture--design---georgia-tech-mooc">Software Architecture &amp; Design - Georgia Tech (mooc)</h3>
                <ul>
                <li><a href="https://www.udacity.com/course/software-architecture-design--ud821">udacity</a></li>
                </ul>
            </li>
            <li>
                <h3 id="software-construction-in-java---mit-ocw">Software Construction in Java - MIT (OCW)</h3>
                <ul>
                <li>edx <a href="https://www.edx.org/course/software-construction-java-mitx-6-005-1x">part1</a> <a href="https://www.edx.org/course/advanced-software-construction-java-mitx-6-005-2x">part2</a></li>
                </ul>
            </li>
            <li>
                <h3 id="cs3-design-in-computing---unsw-ocw">CS3: Design in Computing - UNSW (OCW)</h3>
                <ul>
                <li><a href="https://www.youtube.com/watch?v=coserN4FO3g&amp;list=PLC3E93EF6B9645D9D">playlist</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="programming-languages">Programming Languages</h2>
            <ul>
            <li>
                <h3 id="principles-of-programming-languages---iit-delhi-ocw">Principles of Programming Languages - IIT Delhi (OCW)</h3>
                <ul>
                <li><a href="https://www.youtube.com/watch?v=EbNJ05EVXs0&amp;list=PLF7C73918190889CE">playlist</a></li>
                </ul>
            </li>
            <li>
                <h3 id="programming-languages-standard-ml---1---8---ru-computer-science-youtube">Programming Languages: Standard ML - 1 -&gt; 8 - RU Computer Science (youtube)</h3>
                <ul>
                <li><a href="https://www.youtube.com/user/rucomputerscience/search?query=standard+ML">playlist</a></li>
                </ul>
            </li>
            <li>
                <h3 id="programming-in-standard-ml-97-an-on-line-tutorial---stephen-gilmore-oer">Programming in Standard ML ‘97: An On-line Tutorial - Stephen Gilmore (OER)</h3>
                <ul>
                <li><a href="http://homepages.inf.ed.ac.uk/stg/NOTES/">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="introduction-to-standard-ml---atsushi-ohori-oer">Introduction to Standard ML - Atsushi Ohori (OER)</h3>
                <ul>
                <li><a href="http://www.pllab.riec.tohoku.ac.jp/smlsharp/smlIntroSlides.pdf">pdf</a></li>
                </ul>
            </li>
            <li>
                <h3 id="programming-in-standard-ml---robert-harper-oer">Programming in Standard ML - Robert Harper (OER)</h3>
                <ul>
                <li><a href="http://www.cs.cmu.edu/~rwh/isml/book.pdf">pdf</a></li>
                </ul>
            </li>
            <li>
                <h3 id="practical-foundations-for-programming-languages---robert-harper-oer">Practical Foundations for Programming Languages - Robert Harper (OER)</h3>
                <ul>
                <li><a href="https://thelackthereof.org/docs/library/book.pdf">pdf</a></li>
                <li><a href="https://www.cs.cmu.edu/~rwh/courses/ppl/">course notes</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="compilers">Compilers</h2>
            <ul>
            <li>
                <h3 id="compilers---stanford-ocw">Compilers - Stanford (OCW)</h3>
                <ul>
                <li><a href="https://lagunita.stanford.edu/courses/Engineering/Compilers/Fall2014/about">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="compiler-design-theory-tools-and-examples---seth-d-bergmann-oer">Compiler Design: Theory, Tools, and Examples - Seth D. Bergmann (OER)</h3>
                <ul>
                <li><a href="http://www.stack.nl/~marcov/compiler.pdf">pdf</a></li>
                <li><a href="http://elvis.rowan.edu/~bergmann/books/cd/c_cpp/miniC/">code</a></li>
                </ul>
            </li>
            <li>
                <h3 id="compiler-building-tutorial---jack-w-crenshaw-oer">Compiler Building Tutorial - Jack W. Crenshaw (OER)</h3>
                <ul>
                <li><a href="http://www.stack.nl/~marcov/compiler.pdf">pdf</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="ai">AI</h2>
            <ul>
            <li>
                <h3 id="the-quest-for-artificial-intelligence-a-history-of-ideas-and-achievements---nils-j-nilsson-oer">The Quest for Artificial Intelligence: A History of Ideas and Achievements - Nils J. Nilsson (OER)</h3>
                <ul>
                <li><a href="http://ai.stanford.edu/~nilsson/QAI/qai.pdf">pdf</a></li>
                </ul>
            </li>
            <li>
                <h3 id="cs188-intro-to-ai---berkeley-ocw">CS188 Intro to AI - Berkeley (OCW)</h3>
                <ul>
                <li><a href="http://ai.berkeley.edu/">site</a></li>
                <li><a href="http://ai.berkeley.edu/lecture_videos.html">playlist</a></li>
                </ul>
            </li>
            <li>
                <h3 id="artificial-intelligence---ravensburg-weingarten-university-ocw">Artificial Intelligence - Ravensburg-Weingarten University (OCW)</h3>
                <ul>
                <li><a href="https://www.youtube.com/watch?v=katiy95_mxo&amp;list=PL39B5D3AFC249556A">playlist</a></li>
                </ul>
            </li>
            <li>
                <h3 id="cs405-artificial-intelligence---saylor-oer">CS405: Artificial Intelligence - Saylor (OER)</h3>
                <ul>
                <li><a href="https://learn.saylor.org/course/view.php?id=96">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="cs408-advanced-artificial-intelligence---saylor-oer">CS408: Advanced Artificial Intelligence - Saylor (OER)</h3>
                <ul>
                <li><a href="https://learn.saylor.org/course/view.php?id=81">site</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="computability">Computability</h2>
            <ul>
            <li>
                <h3 id="introduction-to-the-theory-of-computation---arsdigita-ocw">Introduction to the Theory of Computation - ArsDigita (OCW)</h3>
                <ul>
                <li><a href="https://www.youtube.com/playlist?list=PL601FC994BDD963E4">playlist</a></li>
                </ul>
            </li>
            <li>
                <h3 id="foundations-of-computation---carol-critchlow-david-eck-oer">Foundations of Computation - Carol Critchlow, David Eck (OER)</h3>
                <ul>
                <li><a href="http://math.hws.edu/FoundationsOfComputation/">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="theory-of-computation---ucdavis-ocw">Theory of Computation - UCDavis (OCW)</h3>
                <ul>
                <li><a href="https://www.youtube.com/playlist?list=PLslgisHe5tBM8UTCt1f66oMkpmjCblzkt">playlist</a></li>
                </ul>
            </li>
            <li>
                <h3 id="introduction-to-theory-of-computation---anil-maheshwari-and-michiel-smid-oer">Introduction to Theory of Computation - Anil Maheshwari and Michiel Smid (OER)</h3>
                <ul>
                <li><a href="http://cglab.ca/~michiel/TheoryOfComputation/">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="models-of-computation-exploring-the-power-of-computing---john-e-savage-oer">Models of Computation: Exploring the Power of Computing - John E. Savage (OER)</h3>
                <ul>
                <li><a href="http://cs.brown.edu/people/jsavage/book/">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="computer-science---theory-of-computation---iit-kanpur-ocw">Computer Science - Theory of Computation - IIT Kanpur (OCW)</h3>
                <ul>
                <li><a href="https://www.youtube.com/playlist?list=PLbMVogVj5nJSd25WnSU144ZyGmsqjuKr3">playlist</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="machine-learning">Machine Learning</h2>
            <ul>
            <li>
                <h3 id="machine-learning---stanford-university-mooc">Machine Learning - Stanford University (mooc)</h3>
                <ul>
                <li><a href="https://www.coursera.org/learn/machine-learning">coursera</a></li>
                </ul>
            </li>
            <li>
                <h3 id="building-machine-learning-systems-with-python---willi-richert-luis-pedro-coelho-oer">Building Machine Learning Systems with Python - Willi Richert, Luis Pedro Coelho (OER)</h3>
                <ul>
                <li><a href="https://www.packtpub.com/packt/free-ebook/python-machine-learning-algorithms">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="a-first-encounter-with-machine-learning---max-welling-oer">A First Encounter with Machine Learning - Max Welling (OER)</h3>
                <ul>
                <li><a href="https://www.ics.uci.edu/~welling/teaching/ICS273Afall11/IntroMLBook.pdf">pdf</a></li>
                </ul>
            </li>
            <li>
                <h3 id="a-brief-introduction-to-machine-learning-for-engineers---osvaldo-simeone-oer">A Brief Introduction to Machine Learning for Engineers - Osvaldo Simeone (OER)</h3>
                <ul>
                <li><a href="https://arxiv.org/pdf/1709.02840.pdf">pdf</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="software-engineering">Software Engineering</h2>
            <ul>
            <li>
                <h3 id="software-engineering-introduction---the-university-of-british-columbia-mooc">Software Engineering: Introduction - The University of British Columbia (mooc)</h3>
                <ul>
                <li><a href="https://www.edx.org/course/software-engineering-introduction-ubcx-softeng1x">edx</a></li>
                </ul>
            </li>
            <li>
                <h3 id="agile-planning-from-ideas-to-story-cards-oer">Agile Planning: From Ideas to Story Cards (OER)</h3>
                <ul>
                <li><a href="https://launchschool.com/books/agile_planning">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="cs302-software-engineering---saylor-oer">CS302: SOFTWARE ENGINEERING - Saylor (OER)</h3>
                <ul>
                <li><a href="https://learn.saylor.org/course/view.php?id=73">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="guide-to-the-software-engineering-body-of-knowledge---ieee-oer">Guide to the Software Engineering Body of Knowledge - IEEE (OER)</h3>
                <ul>
                <li><a href="https://www.computer.org/portal/web/swebok">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="computer-science-169---berkeley-ocw">Computer Science 169 - Berkeley (OCW)</h3>
                <ul>
                <li><a href="https://archive.org/details/ucberkeley-webcast-PL-XXv-cvA_iAS_kCeleydK6mDc0kCbdhU">playlist</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="liberal-arts-break-4">Liberal Arts Break</h2>
            <ul>
            <li>
                <h3 id="pride-and-prejudice---jane-austen-public-domain">Pride and Prejudice - Jane Austen (public domain)</h3>
                <ul>
                <li><a href="http://www.gutenberg.org/ebooks/1342">site</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="security">Security</h2>
            <ul>
            <li>
                <h3 id="the-cryptoparty-handbook-oer">The Cryptoparty Handbook (OER)</h3>
                <ul>
                <li><a href="https://unglue.it/work/141611/">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="crypto-101---laurens-van-houtven-oer">Crypto 101 - Laurens Van Houtven (OER)</h3>
                <ul>
                <li><a href="https://www.crypto101.io/">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="cryptography---stanford-mooc">Cryptography - Stanford (mooc)</h3>
                <ul>
                <li><a href="https://www.coursera.org/learn/crypto">part1</a> <a href="https://www.coursera.org/learn/crypto2">part2</a></li>
                </ul>
            </li>
            <li>
                <h3 id="introduction-to-cryptography-by-christof-paar-ocw">Introduction to Cryptography by Christof Paar (OCW)</h3>
                <ul>
                <li><a href="https://www.youtube.com/channel/UC1usFRN4LCMcfIV7UjHNuQg/featured">playlist</a></li>
                </ul>
            </li>
            <li>
                <h3 id="introduction-to-it-security---steven-gordon-ocw">Introduction to IT Security - Steven Gordon (OCW)</h3>
                <ul>
                <li><a href="https://www.youtube.com/watch?v=bx5CPmNbblI&amp;list=PLvifRcqOOwF89bqRiJEWyu5k7qJaTNMRj">playlist</a></li>
                </ul>
            </li>
            <li>
                <h3 id="security-engineering---ross-anderson-oer">Security Engineering - Ross Anderson (OER)</h3>
                <ul>
                <li><a href="https://www.cl.cam.ac.uk/~rja14/book.html">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="security-and-cryptography-2012---thammasat-university-ocw">Security and Cryptography 2012 - Thammasat University (OCW)</h3>
                <ul>
                <li><a href="https://www.youtube.com/playlist?list=PLvifRcqOOwF-b74gWV5TpyMFFs2dVlqTt">playlist</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="systems-programming">Systems Programming</h2>
            <ul>
            <li>
                <h3 id="computation-structures---mit-mooc">Computation Structures - MIT (mooc)</h3>
                <ul>
                <li>edx <a href="https://www.edx.org/course/computation-structures-part-1-digital-mitx-6-004-1x-0">part1</a> <a href="https://www.edx.org/course/computation-structures-2-computer-mitx-6-004-2x">part2</a> <a href="https://www.edx.org/course/computation-structures-3-computer-mitx-6-004-3x-0">part3</a></li>
                </ul>
            </li>
            <li>
                <h3 id="computer-system-engineering---mit-ocw">Computer System Engineering - MIT (OCW)</h3>
                <ul>
                <li><a href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-033-computer-system-engineering-spring-2009/index.htm">site</a></li>
                </ul>
            </li>
            <li>
                <h3 id="the-hardwaresoftware-interface-class---luis-ceze-and-gaetano-borriello-mooc">The Hardware/Software Interface Class - Luis Ceze and Gaetano Borriello (mooc)</h3>
                <ul>
                <li><a href="https://www.youtube.com/playlist?list=PL0oekSefhQVJdk0hSRu6sZ2teWM740NtL">playlist</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="web-development">Web Development</h2>
            <ul>
            <li>
                <h3 id="react">React</h3>
                <ul>
                <li>
                    <h4 id="intro-to-react-oer">Intro to React (OER)</h4>
                    <ul>
                    <li><a href="https://survivejs.com/react/introduction/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="tutorial-intro-to-react-oer">Tutorial: Intro to React (OER)</h4>
                    <ul>
                    <li><a href="https://reactjs.org/tutorial/tutorial.html">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="the-road-to-learn-react---robin-wieruch-oer">The Road to learn React - Robin Wieruch (OER)</h4>
                    <ul>
                    <li><a href="https://leanpub.com/the-road-to-learn-react">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="react-js-tutorial---learncodeacademy-youtube">REACT JS TUTORIAL - learncode.academy (youtube)</h4>
                    <ul>
                    <li><a href="https://www.youtube.com/watch?v=MhkGQAoc7bc&amp;list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b">playlist</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="reactjs-for-the-visual-learner---mike-mangialardi-oer">React.js for the Visual Learner - Mike Mangialardi (OER)</h4>
                    <ul>
                    <li><a href="https://leanpub.com/reactjsforthevisuallearner/read">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="the-soundcloud-client-in-react--redux-oer">The SoundCloud Client in React + Redux (OER)</h4>
                    <ul>
                    <li><a href="https://www.robinwieruch.de/the-soundcloud-client-in-react-redux/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="the-complete-redux-book---ilya-gelman-boris-dinkevich-oer">The Complete Redux Book - Ilya Gelman, Boris Dinkevich (OER)</h4>
                    <ul>
                    <li><a href="https://leanpub.com/redux-book">site</a></li>
                    </ul>
                </li>
                </ul>
            </li>
            <li>
                <h3 id="angular">Angular</h3>
                <ul>
                <li>
                    <h4 id="angular-tutorial---angulario-oer">Angular Tutorial - angular.io (OER)</h4>
                    <ul>
                    <li><a href="https://angular.io/tutorial">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="developing-with-angular---denys-vuika-oer">Developing with Angular - Denys Vuika (OER)</h4>
                    <ul>
                    <li><a href="https://leanpub.com/developing-with-angular/">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="angular-2-succinctly---joseph-d-booth-oer">Angular 2 Succinctly - Joseph D. Booth (OER)</h4>
                    <ul>
                    <li><a href="https://www.syncfusion.com/ebooks/angular2_succinctly">site</a></li>
                    </ul>
                </li>
                <li>
                    <h4 id="angular-5-companion-guide---john-niedzwiecki-ii-oer">Angular 5 Companion Guide - John Niedzwiecki II (OER)</h4>
                    <ul>
                    <li><a href="https://www.packtpub.com/free-ebook/angular-5-companion-guide">site</a></li>
                    </ul>
                </li>
                </ul>
            </li>
            <li>
                <h3 id="vue">Vue</h3>
                <ul>
                <li>
                    <h4 id="the-vue-handbook---flavio-copes-oer">The Vue Handbook - Flavio Copes (OER)</h4>
                    <ul>
                    <li><a href="https://leanpub.com/thevuehandbook">site</a></li>
                    </ul>
                </li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="mobile-development">Mobile Development</h2>
        </li>
        <li>
            <h2 id="game-development">Game Development</h2>
        </li>
        <li>
            <h2 id="big-data-analysis">Big Data Analysis</h2>
        </li>
        <li>
            <h2 id="graphics">Graphics</h2>
        </li>
        <li>
            <h2 id="liberal-arts-break-5">Liberal Arts Break</h2>
            <ul>
            <li>
                <h3 id="a-vindication-of-the-rights-of-woman---mary-wollstonecraft-public-domain">A Vindication of the Rights of Woman - Mary Wollstonecraft (public domain)</h3>
                <ul>
                <li><a href="http://www.gutenberg.org/ebooks/3420">site</a></li>
                </ul>
            </li>
            </ul>
        </li>
        <li>
            <h2 id="first-year-equivalent-of-science-and-mathematics">First Year Equivalent of Science and Mathematics</h2>
        </li>
        </ul>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `