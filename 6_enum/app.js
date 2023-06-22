var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["MANAGER"] = 1] = "MANAGER";
    Role[Role["TEAM_LEADER"] = 2] = "TEAM_LEADER";
    Role[Role["EMPLOYEE"] = 3] = "EMPLOYEE";
})(Role || (Role = {}));
console.log(Role.ADMIN);
console.log(Role.EMPLOYEE);
