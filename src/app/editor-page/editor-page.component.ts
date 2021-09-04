import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-editor-page',
  templateUrl: './editor-page.component.html',
  styleUrls: ['./editor-page.component.css']
})
export class EditorPageComponent implements OnInit {
  text: any;
  text2:string=' ';
  paragraph: string = `
  You can write text, that contains expressions like this: $x ^ 2 + 5$ inside them. As you probably know.
  You also can write expressions in display mode as follows: $$\\sum_{i=1}^n(x_i^2 - \\overline{x}^2)$$.
  In first case you will need to use \\$expression\\$ and in the second one \\$\\$expression\\$\\$.
  To scape the \\$ symbol it's mandatory to write as follows: \\\\$
`;
  constructor() { }

  ngOnInit(): void {
  }

}
