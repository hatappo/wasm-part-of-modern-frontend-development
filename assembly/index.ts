// import "wasi";  // no longer necessary
import { Console, CommandLine } from "as-wasi/assembly";
const args = CommandLine.all;
const user = args[args.length - 1];
Console.log(`Hello ${user}!`);
