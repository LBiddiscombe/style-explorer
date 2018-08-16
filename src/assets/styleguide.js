const STYLEGUIDE_HTML = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Poor Mans Style Guide</title>
  <link rel="stylesheet" id="pagestyle" type="text/css" href="" />
</head>

<style>

::-webkit-scrollbar{
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track-piece{
	background-color: #FFF;
}

::-webkit-scrollbar-thumb{
	background-color: #eee;
	outline: 2px solid #FFF;
	outline-offset: -2px;
}

::-webkit-scrollbar-thumb:hover{
	background-color: #ccc;
}

</style>

<body>
  <!-- Beginning of Styleguide -->

  <h1>Poor Man's Styleguide</h1>

  <p>A quick-and-dirty frontend styleguide, designed to be copied and pasted into your CMS.</p>

  <strong>
    <a href="http://poormansstyleguide.com">See the full demo at poormansstyleguide.com</a>
  </strong>

  <hr />

  <h1 id="headings">Headings</h1>

  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>

  <hr />

  <h1 id="headings-with-text">Headings with Text</h1>

  <h1>Heading 1</h1>
  <p>Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis
    suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p>
  <h2>Heading 2</h2>
  <p>Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis
    suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p>
  <h3>Heading 3</h3>
  <p>Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis
    suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p>
  <h4>Heading 4</h4>
  <p>Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis
    suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p>
  <h5>Heading 5</h5>
  <p>Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis
    suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p>
  <h6>Heading 6</h6>
  <p>Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis
    suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p>

  <hr />

  <h1 id="text-block">Block Elements</h1>

  <h2 id="paragraph">Paragraphs and Images</h2>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum,
    turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor.</p>

  <p>
    <img alt="Placeholder Image and Some Alt Text" src="https://placehold.it/350x150" title="A title element for this placeholder image.">
  </p>

  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus.
    Nunc iaculis suscipit dui. Nam sit amet sem.</p>

  <h2 id="blockquote">Blockquote</h2>

  <p>This is a standard paragraph. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  <blockquote>
    "
    <strong>This is a blockquote.</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est.
    Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt
    nec, gravida vehicula, nisl."
  </blockquote>
  <p>This is a standard paragraph. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>

  <h2 id="figure-caption">Figure-Caption</h2>

  <figure>
    <img src="https://placehold.it/350x150" alt="A placeholder figure image." />
    <figcaption>The figcaption element example</figcaption>
  </figure>

  <h2 id="details-summary">Details-Summary</h2>

  <details>
    <summary>The summary element example</summary>
    <p>The details example text. It may be styled differently based on what browser or operating system you are using.</p>
  </details>

  <hr />

  <h1 id="text-elements">Text Elements</h1>

  <p>The
    <a href="#">a element</a> and
    <a href="https://example.com" target="_blank">external a element</a> examples</p>
  <p>The
    <abbr>abbr element</abbr> and an
    <abbr title="Abbreviation">abbr</abbr> element with title examples</p>
  <p>The
    <acronym title="A Cowboy Ran One New York Marathon">ACRONYM</acronym> element example</p>
  <p>The
    <b>b element</b> example</p>
  <p>The
    <cite>cite element</cite> example</p>
  <p>The
    <code>code element</code> example</p>
  <p>The
    <data value="3967381398">data element</data> example</p>
  <p>The
    <del>del element</del> example</p>
  <p>The
    <dfn>dfn element</dfn> and
    <dfn title="Title text">dfn element with title</dfn> examples</p>
  <p>The
    <em>em element</em> example</p>
  <p>The
    <i>i element</i> example</p>
  <p>The
    <ins>ins element</ins> example</p>
  <p>The
    <kbd>kbd element</kbd> example</p>
  <p>The
    <mark>mark element</mark> example</p>
  <p>The
    <q>q element</q> example</p>
  <p>The
    <q>q element
      <q>inside</q> a q element</q> example</p>
  <p>The
    <s>s element</s> example</p>
  <p>The
    <samp>samp element</samp> example</p>
  <p>The
    <small>small element</small> example</p>
  <p>The
    <span>span element</span> example</p>
  <p>The
    <strong>strong element</strong> example</p>
  <p>The
    <sub>sub element</sub> example</p>
  <p>The
    <sup>sup element</sup> example</p>
  <p>The
    <time datetime="2005-05-15 19:00">time element</time> example</p>
  <p>The
    <u>u element</u> example</p>
  <p>The
    <var>var element</var> example</p>

  <hr />

  <h1 id="monospace">Monospace / Preformatted</h1>
  <p>Code block wrapped in "pre" and "code" tags</p>
  <pre><code>// Loop through Divs using Javascript.
var divs = document.querySelectorAll('div'), i;

for (i = 0; i < divs.length; ++i) {
  divs[i].style.color = "green";
}</code></pre>
  <p>Monospace Text wrapped in "pre" tags</p>
  <pre><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p></pre>

  <hr />

  <h1 id="list-types">List Types</h1>

  <h2 id="ordered-list">Ordered List</h2>
  <ol>
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3
      <ol>
        <li>List Item 3.1</li>
        <li>List Item 3.2
          <ol>
            <li>List Item 3.2.1</li>
            <li>List Item 3.2.2</li>
          </ol>
        </li>
        <li>List Item 3.3</li>
      </ol>
    </li>
    <li>List Item 4</li>
  </ol>

  <h2 id="unordered-list">Unordered List</h2>
  <ul>
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3
      <ul>
        <li>List Item 3.1</li>
        <li>List Item 3.2
          <ul>
            <li>List Item 3.2.1</li>
            <li>List Item 3.2.2</li>
          </ul>
        </li>
        <li>List Item 3.3</li>
      </ul>
    </li>
    <li>List Item 4</li>
  </ul>

  <h2 id="definition-list">Definition List</h2>
  <dl>
    <dt>Definition Term 1</dt>
    <dd>Definition Description 1</dd>
    <dt>Definition Term 2</dt>
    <dd>Definition Description 2</dd>
  </dl>

  <hr />

  <h1 id="tables">Tables</h1>

  <table cellspacing="0" cellpadding="0">
    <caption>This is a table caption</caption>
    <thead>
      <tr>
        <th>Table Header 1</th>
        <th>Table Header 2</th>
        <th>Table Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Division 1</td>
        <td>Division 2</td>
        <td>Division 3</td>
      </tr>
      <tr class="even">
        <td>Division 1</td>
        <td>Division 2</td>
        <td>Division 3</td>
      </tr>
      <tr>
        <td>Division 1</td>
        <td>Division 2</td>
        <td>Division 3</td>
      </tr>
      <tr>
        <td colspan="3">A row with a cell spanning all 3 columns</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>Table Footer 1</th>
        <th>Table Footer 2</th>
        <th>Table Footer 3</th>
      </tr>
    </tfoot>
  </table>

  <hr />

  <h1 id="media-elements">Media</h1>

  <h2>The Audio Element:</h2>
  <audio controls>
    <source src="https://simpl.info/audio/audio/audio.mp3" type="audio/mp3" />
    <source src="https://simpl.info/audio/audio/audio.ogv" type="audio/ogg" /> Your browser does not support the audio element.
  </audio>

  <h2>The Video Element:</h2>
  <video width="320" height="240" controls>
    <source src="https://www.html5rocks.com/en/tutorials/video/basics/devstories.webm" type="video/webm;codecs='vp8, vorbis'"
    />
    <source src="https://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4" type="video/mp4;codecs='avc1.42E01E, mp4a.40.2'"
    />
    <track src="https://www.html5rocks.com/en/tutorials/video/basics/devstories-en.vtt" label="English subtitles" kind="subtitles"
      srclang="en" default /> Your browser does not support the video tag.
  </video>

  <h2>Embedded content:</h2>

  <p>YouTube video (iframe):</p>

  <iframe width="560" height="315" src="https://www.youtube.com/embed/l4f9QF0SGuQ" frameborder="0" allowfullscreen></iframe>

  <hr />

  <h1 id="form-elements">Form Elements</h1>

  <p>The Fieldset:</p>
  <fieldset>
    <legend>Legend</legend>

    <p>The Form:</p>

    <form>
      <p>
        <label for="text_field">Text Field:</label>
        <br />
        <input type="text" id="text_field" />
      </p>

      <p>
        <label for="text_field_disabled">Disabled Text Field:</label>
        <br />
        <input type="text" id="text_field_disabled" disabled value="I'm disabled" />
      </p>

      <p>
        <label for="text_field_readonly">Readonly Text Field:</label>
        <br />
        <input type="text" id="text_field_readonly" readonly value="I'm readonly" />
      </p>

      <p>
        <label for="text_area">Text Area:</label>
        <br />
        <textarea id="text_area"></textarea>
      </p>

      <p>
        <label for="text_area_disabled">Disabled Text Area:</label>
        <br />
        <textarea id="text_area_disabled" disabled>I'm disabled</textarea>
      </p>

      <p>
        <label for="text_area_readonly">Readonly Text Area:</label>
        <br />
        <textarea id="text_area_readonly" readonly>I'm readonly</textarea>
      </p>

      <p>
        <label for="select_element">Select Element:</label>
        <br />
        <select id="select_element">
          <optgroup label="Option Group 1">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </optgroup>
          <optgroup label="Option Group 2">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3" disabled>Disabled Option</option>
          </optgroup>
        </select>
      </p>

      <p>
        <label for="select_element_disabled">Disabled Select Element:</label>
        <br/>
        <select id="select_element_disabled" disabled>
          <option value="1">Unselectable Option</option>
          <option value="2">This option should not even be seen</option>
        </select>
      </p>

      <p>Radio Buttons:
        <br />
        <label>
          <input type="radio" class="radio" name="radio_button" value="radio_1" /> Radio 1</label>
        <br/>
        <label>
          <input type="radio" class="radio" name="radio_button" value="radio_2" /> Radio 2</label>
        <br/>
        <label>
          <input type="radio" class="radio" name="radio_button" value="radio_3" /> Radio 3</label>
        <br/>
        <label>
          <input type="radio" class="radio" name="radio_button" value="radio_4" disabled /> Radio Disabled</label>
        <br/>
      </p>

      <p>Checkboxes:
        <br />
        <label>
          <input type="checkbox" class="checkbox" name="checkboxes" value="check_1" /> Checkbox 1</label>
        <br/>
        <label>
          <input type="checkbox" class="checkbox" name="checkboxes" value="check_2" /> Checkbox 2</label>
        <br/>
        <label>
          <input type="checkbox" class="checkbox" name="checkboxes" value="check_3" /> Checkbox 3</label>
        <br/>
        <label>
          <input type="checkbox" class="checkbox" name="checkboxes" value="check_4" disabled /> Checkbox Disabled</label>
        <br/>
      </p>

      <p>
        <label for="password">Password:</label>
        <br />
        <input type="password" class="password" id="password" />
      </p>

      <p>
        <label for="file">File Input:</label>
        <br />
        <input type="file" class="file" id="file" />
      </p>

      <h3>HTML5-specific Form Elements</h3>

      <p>
        <label for="email">Email:</label>
        <br />
        <input type="email" id="email" />
      </p>

      <p>
        <label for="url">URL:</label>
        <br />
        <input type="url" id="url" />
      </p>

      <p>
        <label for="tel">Telephone:</label>
        <br />
        <input type="tel" id="tel" />
      </p>

      <p>
        <label for="number">Number:</label>
        <br />
        <input type="number" id="number" min="0" max="10" step="1" value="5" />
      </p>

      <p>
        <label for="search">Search:</label>
        <br />
        <input type="search" id="search" />
      </p>

      <p>
        <label for="date">Date:</label>
        <br />
        <input type="date" id="date" />
      </p>

      <p>
        <label for="time">Time:</label>
        <br />
        <input type="time" id="time" />
      </p>

      <p>
        <label for="color">Color:</label>
        <br />
        <input type="color" id="color" />
      </p>

      <p>
        <label for="datalist">Datalist:</label>
        <br />
        <input list="browsers" name="browser" type="datalist" id="datalist" />
        <datalist id="browsers">
          <option value="Internet Explorer" />
          <option value="Firefox" />
          <option value="Chrome" />
          <option value="Opera" />
          <option value="Safari" />
        </datalist>
      </p>

      <p>
        <label for="range">Range:</label>
        <br />
        <input type="range" id="range" name="points" min="1" max="10" />
      </p>

      <p>
        <label for="output">Output:</label>
        <br />
        <output name="result" id="output">42</output>
      </p>

      <p>
        <label for="progress">Progress:</label>
        <br />
        <progress id="progress" value="65" max="100"></progress>
      </p>

      <p>
        <label for="meter">Meter:</label>
        <br />
        <meter id="meter" min="200" max="500" value="350">350 degrees</meter>
      </p>

      <p>
        <button class="button">Button Element</button>
        <input class="button" type="reset" value="Clear" />
        <input class="button" type="submit" value="Submit" />
      </p>
    </form>

  </fieldset>

  <!-- End of Styleguide -->
</body>

</html>
`

export default STYLEGUIDE_HTML
