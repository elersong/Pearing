class Project {
    constructor(name, description = '', expectedEndDate = '', ownerId){
        this.name = name;
        this.projectId = '',
        this.projectOwner = ownerId;
        this.description = description;
        this.startDate = Date.now();
        this.expectedEndDate = expectedEndDate;
        this.actualEndDate;
        this.userList = {};
    }
    // method to add user to project
    addUser(userId) {
        this.userList.push(userId);
    }
}