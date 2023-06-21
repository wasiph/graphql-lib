import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class Survey extends BaseModel {
  @Field()
  mbranch: string;

  @Field()
  employment: string;

  @Field()
  remotework: string;

  @Field()
  ed_level: string;

  @Field()
  learn_code: string;

  @Field()
  learn_code_online: string;

  @Field()
  learn_code_course_cert: string;

  @Field()
  years_code: string;

  @Field()
  years_code_pro: string;

  @Field()
  dev_type: string;

  @Field()
  org_size: string;

  @Field()
  purchase_influence: string;

  @Field()
  buy_new_tool: string;

  @Field()
  country: string;

  @Field()
  currency: string;

  @Field()
  comp_total: string;

  @Field()
  comp_freq: string;

  @Field()
  languages_have_worked_with: string;

  @Field()
  languages_want_work_with: string;

  @Field()
  dbs_have_worked_with: string;

  @Field()
  dbs_want_work_with: string;

  @Field()
  platforms_have_worked_with: string;

  @Field()
  platforms_want_work_with: string;

  @Field()
  web_have_worked_with: string;

  @Field()
  web_want_work_with: string;

  @Field()
  misc_tech_have_worked_with: string;

  @Field()
  misc_tech_want_work_with: string;

  @Field()
  tools_tech_have_worked_with: string;

  @Field()
  tools_tech_want_work_with: string;

  @Field()
  new_collab_tools_have_worked_with: string;

  @Field()
  new_collab_tools_want_work_with: string;

  @Field(() => String, { nullable: true })
  os_professional_use?: string | null;

  @Field(() => String, { nullable: true })
  os_personal_use?: string | null;

  @Field()
  vcsystem: string;

  @Field()
  vcinteraction: string;

  @Field(() => String, { nullable: true })
  vc_hosting_personal_use?: string | null;

  @Field(() => String, { nullable: true })
  vc_hosting_professional_use?: string | null;

  @Field()
  ofc_stack_async_have_worked_with: string;

  @Field()
  ofc_stack_async_want_work_with: string;

  @Field()
  ofc_stack_sync_have_worked_with: string;

  @Field()
  ofc_stack_sync_want_work_with: string;

  @Field()
  blockchain: string;

  @Field()
  new_so_sites: string;

  @Field()
  so_visit_freq: string;

  @Field()
  so_account: string;

  @Field()
  so_part_freq: string;

  @Field()
  so_comm: string;

  @Field()
  age: string;

  @Field()
  gender: string;

  @Field()
  trans: string;

  @Field()
  sexuality: string;

  @Field()
  ethnicity: string;

  @Field()
  accessibility: string;

  @Field()
  mental_health: string;

  @Field()
  t_branch: string;

  @Field()
  i_cor_pm: string;

  @Field()
  work_exp: string;

  @Field()
  knowledge_1: string;

  @Field()
  knowledge_2: string;

  @Field()
  knowledge_3: string;

  @Field()
  knowledge_4: string;

  @Field()
  knowledge_5: string;

  @Field()
  knowledge_6: string;

  @Field()
  knowledge_7: string;

  @Field()
  frequency_1: string;

  @Field()
  frequency_2: string;

  @Field()
  frequency_3: string;

  @Field()
  time_searching: string;

  @Field()
  time_answering: string;

  @Field()
  onboarding: string;

  @Field()
  profession_tech: string;

  @Field()
  true_false_1: string;

  @Field()
  true_false_2: string;

  @Field()
  true_false_3: string;

  @Field()
  survey_length: string;

  @Field()
  survey_ease: string;

  // @Field(() => Boolean)
  // published: boolean;
}
