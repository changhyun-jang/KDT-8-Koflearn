// 프로젝트리스트 페이지
const projectlist = (req, res) => {
  res.render("projectlist");
};
// 리코프런리스트 페이지
const recoplearnlist = (req, res) => {
  res.render("recoplearn");
};

//프로젝트 업로드 페이지
const project = (req, res) => {
  res.render("project");
};
const main = (req, res) => {
  res.render("main");
};
const detail = (req, res) => {
  res.render("detailPage");
};
module.exports = {
  projectlist,
  recoplearnlist,
  project,
  main,
  detail,
};
