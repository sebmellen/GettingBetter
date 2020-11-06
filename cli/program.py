import click


@click.command()
@click.option('--task', help='Add a new task to a routine.')
@click.option('--routine', prompt='Create a new routine within a system. Use the format "hello"',
              help='Create a new routine within a system. Use the format "ROUTINE_NAME/SYSTEM". If you want to change the name of a routine')
@click.option('--system', prompt='Create a new system.',
              help='The person to greet.')
@click.option('--goal', prompt='Add a goal to a system.', help='Add a goal to a system')
def hello(count, name):
    """GettingBetter is a systems-based framework for improving your life.
    The three basic functions provided by this CLI allow you to:\n
    1) Add a task to a routine, 2) create a new routine, or 3) create a new system."""

    for x in range(count):
        click.echo('Hello %s!' % name)


if __name__ == '__main__':
    hello()
