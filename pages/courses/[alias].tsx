import { withLayout } from '../../Layout/Layout';
import {
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next';
import axios from 'axios';
import React, { useState } from 'react';
import { MenuItem } from '../../interfaces/menu.interfaces';
import { TopPageModel } from '../../interfaces/topPage.interface';
import { ParsedUrlQuery } from 'querystring';

function Course({ menu }: CourseProps): JSX.Element {
  return <div></div>;
}

export default withLayout(Course);

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  const firstCategory = 0;
  const { data: menu } = await axios.get<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/sidebar-data'
  );
  const { data: page } = await axios.get<TopPageModel[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/sidebar-data' + params
  );
  return {
    props: {
      menu,
      firstCategory,
      page,
    },
  };
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  page: TopPageModel;
}
