import docopt, parsetoml, json, strformat, strutils, unicode

let doc = """
Welcome to GettingBetter! GettingBetter is a systems-based framework for improving your life.
The three basic functions provided by this CLI allow you to: 
1. Add a task to a routine
2. create a new routine, or 
3. create a new system. 

Usage:
  naval_fate ship new <name>...
  naval_fate ship <name> move <x> <y> [--speed=<kn>]
  naval_fate ship shoot <x> <y>
  naval_fate mine (set|remove) <x> <y> [--moored | --drifting]
  naval_fate (-h | --help)
  naval_fate --version

Options:
  -h --help     Show this screen.
  --version     Show version.
  --speed=<kn>  Speed in knots [default: 10].
  --moored      Moored (anchored) mine.
  --drifting    Drifting mine.
"""

let args = docopt(doc)
echo args

if args["-v"]:
  echo unicode.capitalize(repeat("very ", args["-v"].len - 1) & "verbose")

for path in @(args["--path"]):
  echo read_file(path)


# CREATE A BASIC JSON FILE FROM INPUT.

var
    task: string = "test"
    routine: string = "basic hygiene"
    system: string = "another one"

var jsonObject = %* {"task": task, "routine": routine, "system": system}

echo jsonObject


# let schema = parsetoml.parseString()

# echo(table1.toJson.pretty())

var positionoftask: int = 49

echo "Which system and routine would you like to add this task to? Use the following syntax: \"system/routine\". E.g. basic_hygiene/morning.\n"

echo "Task \"Go to bed early\" has been added to routine \"reset_circadian_rhythms\" in position ", positionoftask, ".\nIf this position is satisfactory, reply Y, otherwise, reply with the desired position number, e.g. \"7\"\n"

echo "Task \"Go to bed early\" has been moved to position ", positionoftask, " in routine \"reset_circadian_rhythms\". If this position is satisfactory, reply Y, otherwise, reply with the desired position number, e.g. \"7\"\n"

echo """
Welcome to GettingBetter! You can add a task to a routine, create a new routine, or create a new system. What would you like to do?
[ ] Add a task
[ ] Create a new routine
[ ] Create a new system
"""

echo "Which system should contain this routine?\n" 

# blogging

echo "What would you like to name your routine?\n" 

# publish_blog

echo "Routine \"publish_blog\" has been created within system \"blogging\". To undo, reply U. To continue, reply C.\n"

# C

echo """
Welcome to GettingBetter! You can add a task to a routine, create a new routine, or create a new system. What would you like to do?
[ ] Add a task
[ ] Create a new routine
[ ] Create a new system
""" 

# [X] Create a new system

echo "What would you like to name your system?\n" 

# better_diet

echo("Would you like to add any routines to this system? Reply Y if yes, or N if no (you can always add routines later).\n")

# Y

echo("You are adding a routine to system \"better_diet\" What would you like to name your routine?\n")

# breakfast

echo("Routine \"breakfast\" has been created within system \"better_diet\". To undo, reply U. To continue, reply C.\n")

# C

echo("""
Welcome to GettingBetter! You can add a task to a routine, create a new routine, or create a new system. What would you like to do?
[ ] Add a task
[ ] Create a new routine
[ ] Create a new system
""")