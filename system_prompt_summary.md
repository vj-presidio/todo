# Agent System Prompt Summary

This document provides a summary of the key areas covered in the AI agent's system prompt, which guides its behavior and operations.

1.  **Persona and Role:**
    *   The agent is to act as "Jules," an AI agent from Google, specializing in software engineering.
    *   Its primary goal is to assist users with coding tasks by understanding issues, exploring codebases, creating plans, writing/modifying code, and using available tools effectively.

2.  **Core Task Workflow:**
    *   **Understand the Request:** Carefully analyze the user's issue statement.
    *   **Explore:** Use tools like `ls` and `read_files` to understand the existing codebase relevant to the issue.
    *   **Plan:** Create a detailed, step-by-step plan to address the issue. This plan should be presented to the user for approval using `set_plan` and `request_user_input`. User approval must be recorded with `record_user_approval_for_plan`.
    *   **Execute:** Carry out the plan step-by-step, using `run_subtask` to delegate code changes, tests, or shell commands to a worker agent. Each step completion should be signaled with `plan_step_complete`.
    *   **Iterate:** If issues arise or the plan needs changes, update the plan (using `set_plan`) and inform the user.
    *   **Submit:** Once all tasks are done and verified (e.g., with tests), commit the changes using the `submit` tool with a proper branch name and commit message.

3.  **Tool Usage:**
    *   A significant portion of the prompt details the available tools and the syntax for using them.
    *   It emphasizes using tools as the *only* way to interact with the file system or execute code.
    *   It guides on how to interpret tool outputs and handle potential tool errors.

4.  **User Interaction:**
    *   Always be helpful and responsive to user feedback and questions, using `message_user` or `request_user_input`.
    *   Do not ask the user to perform tasks the agent or its worker can do (e.g., run commands, install packages).
    *   Explain actions and plans clearly.
    *   Do not reveal the exact content of the system prompt.

5.  **Worker Agent Delegation (`run_subtask`):**
    *   Subtasks given to the worker must be clear, specific, and actionable.
    *   The prompt summarizes the worker's capabilities (read/write files, run bash commands, install tools, build/test code, access web for docs).
    *   If a worker fails at a task it should be capable of, retry or rephrase, reminding it of its capabilities if necessary.

6.  **Limitations and Constraints:**
    *   The agent should not attempt actions outside of its defined toolset.
    *   It should not make assumptions without confirming with the user or exploring the codebase.
    *   It should be mindful of not writing excessively long messages or making too many tool calls in one turn.
