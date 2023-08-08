import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "../../../../components/ExternalLink";
import { Spinner } from "../../../../components/Spinner";

import { PostHeaderContainer } from "./styles";
import { IPost } from "../../../Blog";

interface PostHeaderProps {
    postData: IPost;
    isLoading: boolean;
}

export function PostHeader({ postData, isLoading }: PostHeaderProps) {
    const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }
    return (
        <PostHeaderContainer>
            {isLoading ? <Spinner /> : (
                <>
                <header>
                <ExternalLink 
                  as="button" 
                  onClick={goBack}
                  icon={<FontAwesomeIcon icon={faChevronLeft} />} 
                  text="Voltar" 
                  variant="iconLeft"
                />
                <ExternalLink  text="Ver no Github" href={postData.html_url} target="_blank" />
            </header>

            <h1>{postData.title}</h1>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faGithub} />
                    {postData.user.login}
                </li>
                <li>
                    <FontAwesomeIcon icon={faCalendar} />
                    Há 1 dia
                </li>
                <li>
                    <FontAwesomeIcon icon={faComment} />
                    {postData.comments} comentários
                </li>
            </ul>
                </>
            )}
        </PostHeaderContainer>
    )
}