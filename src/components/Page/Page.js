import React from "react";
import PropTypes from "prop-types";
import Card, { CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";
import Article from "../Main/Article";
import PageHeader from "./PageHeader";
import Content from "../Main/Content";
import { Tooltip, PieChart, Pie, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Vuejs", value: 400 },
  { name: "ReactJS", value: 300 },
  { name: "Ruby On Rails", value: 300 },
  { name: "Laravel", value: 200 },
  { name: "React Native", value: 278 },
  { name: "Nodejs", value: 189 },
];

const Page = (props) => {
  const { page } = props;
  const html = (page || {}).html;

  return (
    <Article>
      <PageHeader {...page.frontmatter} />
      <Content html={html} />
      {page.frontmatter.title == "About" && (
        <Card>
          <Typography variant="display1" color="secondary" align="center">
            My Skills
          </Typography>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart width={700} height={700}>
                <Pie
                  label={(entry) => entry.name}
                  dataKey="value"
                  isAnimationActive={false}
                  data={data01}
                  outerRadius={100}
                  fill="#8884d8"
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}
    </Article>
  );
};

Page.propTypes = {
  page: PropTypes.object.isRequired,
};

export default Page;
