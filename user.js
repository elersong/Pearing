class User {
    constructor(name, userName, email = '', phoneNum = '', 
    gitHub = '', slack = '') {
        this.name = name;
        this.userName = userName;
        this.yearsOfExp = null;
        this.availHours = null;
        this.role = null;
        
        
    }
/*
    userId  |   socialPlatform     |    username
    9845        github                  Jake
    9846        instagram               jimmy
    42069       leafly                 blazeit


*/

    // i'm just brainstorming here
    createProject(projName, description, userId) {
        return newProject = new Project(projName, description, userId);
    }

    // Parse docs: https://parseplatform.org/

    getSocials() {
        // query all social accounts from the socialProfile table for this user
    }

    getRating() {
        // query ratings of this user from table
        // calculate and return average
    }

    updateRole(role) {
        this.role = role;
    }

    updateUser(userInfo) {
        //
    }
}