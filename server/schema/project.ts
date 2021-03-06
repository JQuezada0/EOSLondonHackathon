import { Project } from "../db/entity/project"
import { Resolver, Query, FieldResolver, Root, Arg } from "type-graphql"
import { Poll } from "../db/entity/poll"

@Resolver(Project)
export class ProjectResolver {
  @Query(() => [Project])
  async projects() {
    return Project.find({ relations: ["polls"] })
  }

  @Query(() => Project)
  async project(@Arg("accountName") accountName: string) {
    const [ project ] = await Project.find(<any>{ owner: accountName, relations: ["polls"] })
    return project
  }

  @FieldResolver()
  owner(@Root() project: Project) {
    return project.owner
  }

  @FieldResolver()
  name(@Root() project: Project) {
    return project.name
  }

  @FieldResolver()
  description(@Root() project: Project) {
    return project.description
  }

  @FieldResolver()
  url(@Root() project: Project) {
    return project.url
  }

  @FieldResolver()
  whitepaperUrl(@Root() project: Project) {
    return project.whitepaperUrl
  }

  @FieldResolver()
  tapVoterTurnout(@Root() project: Project) {
    return project.tapVoterTurnout
  }

  @FieldResolver()
  tapMaxIncrease(@Root() project: Project) {
    return project.tapMaxIncrease
  }

  @FieldResolver()
  refundFrequency(@Root() project: Project) {
    return project.refundFrequency
  }

  @FieldResolver()
  maxNumRefunds(@Root() project: Project) {
    return project.maxNumRefunds
  }

  @FieldResolver()
  refundVoteDuration(@Root() project: Project) {
    return project.refundVoteDuration
  }

  @FieldResolver()
  refundVoterTurnout(@Root() project: Project) {
    return project.refundVoterTurnout
  }

  @FieldResolver()
  refundThreshold(@Root() project: Project) {
    return project.refundThreshold
  }

  @FieldResolver(type => [Poll])
  polls(@Root() project: Project): Poll[] {
    return project.polls
  }
}