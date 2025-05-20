# Available Tools

This document lists the tools available to the AI agent and their basic schemas or signatures as understood by the agent.

1.  **`ls(directory_path: str = "")`**
    *   Description: Lists git-tracked files and directories under the given directory in the repo.
    *   Parameters:
        *   `directory_path` (string, optional): The path to the directory to list. Defaults to the repository root if empty.
    *   Returns: A list of strings, where each string is a file or directory name.

2.  **`read_files(filepaths: list[str])`**
    *   Description: Returns the content of the specified files in the repo.
    *   Parameters:
        *   `filepaths` (list of strings): A list of paths to the files to be read.
    *   Returns: A list of strings, where each string is the content of a corresponding file. Can raise FileNotFoundError if a file does not exist.

3.  **`view_text_website(url: str)`**
    *   Description: Fetches the content of a website as plain text.
    *   Parameters:
        *   `url` (string): The URL of the website to fetch.
    *   Returns: A string containing the plain text content of the website. (Note: Requires internet access for the sandbox).

4.  **`set_plan(plan: str)`**
    *   Description: Sets or updates the current execution plan for the agent.
    *   Parameters:
        *   `plan` (string): A string detailing the steps of the plan, usually in markdown format.
    *   Returns: None.

5.  **`plan_step_complete(message: str)`**
    *   Description: Marks the current step in the agent's plan as complete.
    *   Parameters:
        *   `message` (string): A message summarizing what was done to complete the step.
    *   Returns: None.

6.  **`run_subtask(subtask: str)`**
    *   Description: Delegates a specific, actionable task to a Worker agent. The Worker can modify code, run shell commands, install dependencies, run tests, etc.
    *   Parameters:
        *   `subtask` (string): A detailed description of the subtask for the Worker.
    *   Returns: None (The result/output of the subtask is reported back asynchronously).

7.  **`cancel_subtask()`**
    *   Description: Cancels an ongoing subtask that was started with `run_subtask`.
    *   Parameters: None.
    *   Returns: None.

8.  **`message_user(message: str, continue_working: bool)`**
    *   Description: Sends a message to the user.
    *   Parameters:
        *   `message` (string): The content of the message to send.
        *   `continue_working` (boolean): If true, the agent continues with its current work after sending; if false, it usually waits for user input.
    *   Returns: None.

9.  **`request_user_input(message: str)`**
    *   Description: Asks the user a question or requests input and waits for a response.
    *   Parameters:
        *   `message` (string): The question or prompt for the user.
    *   Returns: None (User input is received asynchronously).

10. **`record_user_approval_for_plan()`**
    *   Description: Records that the user has approved the current plan.
    *   Parameters: None.
    *   Returns: None.

11. **`submit(branch_name: str, commit_message: str)`**
    *   Description: Commits the current changes in the repository to a new branch.
    *   Parameters:
        *   `branch_name` (string): The name for the new git branch.
        *   `commit_message` (string): The commit message describing the changes.
    *   Returns: None.
