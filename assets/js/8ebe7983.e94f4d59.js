"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[678],{5357:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return p},default:function(){return h}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),l=n(5623),r=["components"],s={},m="Day 2: Dive!",d={unversionedId:"puzzles/day2",id:"puzzles/day2",isDocsHomePage:!1,title:"Day 2: Dive!",description:"by @mlachkar",source:"@site/target/mdoc/puzzles/day2.md",sourceDirName:"puzzles",slug:"/puzzles/day2",permalink:"/scala-advent-of-code/puzzles/day2",editUrl:"https://github.com/scalacenter/scala-advent-of-code/edit/website/docs/puzzles/day2.md",tags:[],version:"current",frontMatter:{},sidebar:"adventOfCodeSidebar",previous:{title:"Day 1: Sonar Sweep",permalink:"/scala-advent-of-code/puzzles/day1"},next:{title:"Day 3: Binary Diagnostic",permalink:"/scala-advent-of-code/puzzles/day3"}},p=[{value:"Puzzle description",id:"puzzle-description",children:[],level:2},{value:"Solution of Part 1",id:"solution-of-part-1",children:[{value:"Parsing the file",id:"parsing-the-file",children:[],level:3},{value:"Moving the sonar",id:"moving-the-sonar",children:[],level:3},{value:"Final code for part 1",id:"final-code-for-part-1",children:[],level:3}],level:2},{value:"Solution of Part 2",id:"solution-of-part-2",children:[{value:"Moving the sonar part 2",id:"moving-the-sonar-part-2",children:[],level:3},{value:"Final code for part 2",id:"final-code-for-part-2",children:[],level:3}],level:2},{value:"Run it locally",id:"run-it-locally",children:[],level:2},{value:"Solutions from the community",id:"solutions-from-the-community",children:[],level:2}],c={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"day-2-dive"},"Day 2: Dive!"),(0,i.kt)("p",null,"by ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/meriamLachkar"},"@mlachkar")),(0,i.kt)("h2",{id:"puzzle-description"},"Puzzle description"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://adventofcode.com/2021/day/2"},"https://adventofcode.com/2021/day/2")),(0,i.kt)("h2",{id:"solution-of-part-1"},"Solution of Part 1"),(0,i.kt)("h3",{id:"parsing-the-file"},"Parsing the file"),(0,i.kt)("p",null,"The first step is to model the problem and to parse the input file."),(0,i.kt)("p",null,"The command can be either ",(0,i.kt)("inlineCode",{parentName:"p"},"Forward"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Down")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Up"),". I use an Enumeration to model it. "),(0,i.kt)("p",null,"An enumeration is used to define a type consisting of a set of named values. Read ",(0,i.kt)("a",{parentName:"p",href:"https://docs.scala-lang.org/scala3/reference/enums/enums.html"},"the official documentation"),"\nfor more details."),(0,i.kt)("p",null,"Scala 3 enums are more concise and easier to read that the Scala 2 ADTs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"// in Scala 3:\nenum Command:\n  case Forward(x: Int)\n  case Down(x: Int)\n  case Up(x: Int)\n\n// in Scala 2:\nsealed trait Command\nobject Command {\n  case class Forward(x: Int) extends Command\n  case class Down(x: Int) extends Command\n  case class Up(x: Int) extends Command\n}\n")),(0,i.kt)("p",null,"Now let's parse the input to a Command: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'object Command:\n  def from(s: String): Command =\n    s match\n      case s"forward $x" if x.toIntOption.isDefined => Forward(x.toInt)\n      case s"up $x"      if x.toIntOption.isDefined => Up(x.toInt)\n      case s"down $x"    if x.toIntOption.isDefined => Down(x.toInt)\n      case _ => throw new Exception(s"value $s is not valid command")\n\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Here I have chosen to fail during the parsing method ",(0,i.kt)("inlineCode",{parentName:"p"},"Command.from")," to keep the types as simple as possible.\nIf an input file is not valid, we ",(0,i.kt)("inlineCode",{parentName:"p"},"throw")," an exception. "),(0,i.kt)("p",{parentName:"div"},"It's possible to delay the parsing error to the main method, and return an ",(0,i.kt)("inlineCode",{parentName:"p"},"Option[Command]")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Try[Command]"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Command.from")))),(0,i.kt)("h3",{id:"moving-the-sonar"},"Moving the sonar"),(0,i.kt)("p",null,"Now we need to create a method to compute the new position of a sonar given\nthe initial position and a command.\nFor that we create a ",(0,i.kt)("inlineCode",{parentName:"p"},"case class Position(horizontal: Int, depth: Int)"),", that will represent a position,\nand then add a method ",(0,i.kt)("inlineCode",{parentName:"p"},"move")," that will translate the puzzle's rules to a position."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"case class Position(horizontal: Int, depth: Int):\n  def move(p: Command): Position = \n    p match\n      case Command.Forward(x) => Position(horizontal + x, depth)\n      case Command.Down(x)    => Position(horizontal, depth + x)\n      case Command.Up(x)      => Position(horizontal, depth - x)\n")),(0,i.kt)("p",null,"To apply all the commands from the input file, we use ",(0,i.kt)("inlineCode",{parentName:"p"},"foldLeft")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val firstPosition = Position(0, 0)\nval lastPosition = entries.foldLeft(firstPosition)((position, command) => position.move(command))\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"foldLeft")," is a method from the standard library on iterable collections: ",(0,i.kt)("inlineCode",{parentName:"p"},"Seq"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"List"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Iterator"),"..."),(0,i.kt)("p",null,"It's a super convenient method that allows to iterate from left to right on a list."),(0,i.kt)("p",null,"The signature of ",(0,i.kt)("inlineCode",{parentName:"p"},"foldLeft")," is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def foldLeft[B](initialElement: B)(op: (B, A) => B): B\n")),(0,i.kt)("p",null,"Let's see an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"// Implementing a sum on a List\nList(1, 3, 2, 4).foldLeft(0)((accumulator, current) => accumulator + current) // 10 \n")),(0,i.kt)("p",null,"It is the same as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"(((0 + 1) + 3) + 2) + 4\n")),(0,i.kt)("h3",{id:"final-code-for-part-1"},"Final code for part 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'def part1(input: String): Int =\n  val entries = input.linesIterator.map(Command.from)\n  val firstPosition = Position(0, 0)\n  // we iterate on each entry and move it following the received command\n  val lastPosition = entries.foldLeft(firstPosition)((position, command) => position.move(command))\n  lastPosition.result\n\ncase class Position(horizontal: Int, depth: Int):\n  def move(p: Command): Position =\n    p match\n      case Command.Forward(x) => Position(horizontal + x, depth)\n      case Command.Down(x)    => Position(horizontal, depth + x)\n      case Command.Up(x)      => Position(horizontal, depth - x)\n\n  def result = horizontal * depth\n\nenum Command:\n  case Forward(x: Int)\n  case Down(x: Int)\n  case Up(x: Int)\n\nobject Command:\n  def from(s: String): Command =\n    s match\n      case s"forward $x" if x.toIntOption.isDefined => Forward(x.toInt)\n      case s"up $x"      if x.toIntOption.isDefined => Up(x.toInt)\n      case s"down $x"    if x.toIntOption.isDefined => Down(x.toInt)\n      case _ => throw new Exception(s"value $s is not valid command")\n')),(0,i.kt)(l.Z,{puzzle:"day2-part1",mdxType:"Solver"}),(0,i.kt)("h2",{id:"solution-of-part-2"},"Solution of Part 2"),(0,i.kt)("p",null,"The part 2 introduces new rules to move the sonar.\nSo we need a new position that takes into account the ",(0,i.kt)("inlineCode",{parentName:"p"},"aim")," and a new method move with the new rules.\nThe remaining code remains the same."),(0,i.kt)("h3",{id:"moving-the-sonar-part-2"},"Moving the sonar part 2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"case class PositionWithAim(horizontal: Int, depth: Int, aim: Int):\n  def move(p: Command): PositionWithAim =\n    p match\n      case Command.Forward(x) => PositionWithAim(horizontal + x, depth + x * aim, aim)\n      case Command.Down(x)    => PositionWithAim(horizontal, depth, aim + x)\n      case Command.Up(x)      => PositionWithAim(horizontal, depth, aim - x)\n\n")),(0,i.kt)("h3",{id:"final-code-for-part-2"},"Final code for part 2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'case class PositionWithAim(horizontal: Int, depth: Int, aim: Int):\n  def move(p: Command): PositionWithAim =\n    p match\n      case Command.Forward(x) => PositionWithAim(horizontal + x, depth + x * aim, aim)\n      case Command.Down(x)    => PositionWithAim(horizontal, depth, aim + x)\n      case Command.Up(x)      => PositionWithAim(horizontal, depth, aim - x)\n\n  def result = horizontal * depth\n\nenum Command:\n  case Forward(x: Int)\n  case Down(x: Int)\n  case Up(x: Int)\n\nobject Command:\n  def from(s: String): Command =\n    s match\n      case s"forward $x" if x.toIntOption.isDefined => Forward(x.toInt)\n      case s"up $x"      if x.toIntOption.isDefined => Up(x.toInt)\n      case s"down $x"    if x.toIntOption.isDefined => Down(x.toInt)\n      case _ => throw new Exception(s"value $s is not valid command")\n')),(0,i.kt)(l.Z,{puzzle:"day2-part2",mdxType:"Solver"}),(0,i.kt)("h2",{id:"run-it-locally"},"Run it locally"),(0,i.kt)("p",null,"You can get this solution locally by cloning the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalacenter/scala-advent-of-code"},"scalacenter/scala-advent-of-code")," repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git clone https://github.com/scalacenter/scala-advent-of-code\n$ cd advent-of-code\n")),(0,i.kt)("p",null,"The you can run it with scala-cli:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ scala-cli src -M day2.part1\nThe answer is 2070300\n\n$ scala-cli src -M day2.part2\nThe answer is 2078985210\n")),(0,i.kt)("p",null,"You can replace the content of the ",(0,i.kt)("inlineCode",{parentName:"p"},"input/day2")," file with your own input from ",(0,i.kt)("a",{parentName:"p",href:"https://adventofcode.com/2021/day/1"},"adventofcode.com")," to get your own solution."),(0,i.kt)("h2",{id:"solutions-from-the-community"},"Solutions from the community"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik/advent-of-code/blob/main/day2/main.scala"},"Solution")," of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"@tgodzik"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/otobrglez/aoc2021/blob/master/src/main/scala/com/pinkstack/aoc/day02/Dive.scala"},"Solution")," of ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/otobrglez"},"@otobrglez"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/s5bug/aoc/blob/main/src/main/scala/tf/bug/aoc/y2021/Day02.scala"},"Solution")," of @s5bug using ",(0,i.kt)("a",{parentName:"li",href:"https://index.scala-lang.org/typelevel/cats-effect/cats-effect/3.3.0?target=_3.x"},"cats-effect")," and ",(0,i.kt)("a",{parentName:"li",href:"https://index.scala-lang.org/typelevel/fs2/fs2-core/3.2.1?target=_3.x"},"fs2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tOverney/AdventOfCode2021/blob/main/src/main/scala/ch/overney/aoc/day2/"},"Solution")," of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tOverney"},"@tOverney"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/philipschwarz/advent-of-code-2021-scala/tree/master/src/main/scala/day2"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://twitter.com/philip_schwarz"},"@philip_schwarz"))),(0,i.kt)("p",null,"Share your solution to the Scala community by editing this page."))}h.isMDXComponent=!0}}]);