/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';
import {Avatar} from '../../avatar/index.js';
import {LabelMedium, ParagraphSmall} from '../../typography/index.js';
import {
  StyledUserProfileTileContainer,
  StyledUserProfilePictureContainer,
  StyledUserProfileInfoContainer,
} from '../styled-components.js';
import type {UserMenuPropsT} from '../types.js';

export default function UserProfileTile(props: UserMenuPropsT) {
  const {username, usernameSubtitle, userImgUrl} = props;
  return (
    // Replace with a  profile tile renderer: renderUserProfileTile()
    <StyledUserProfileTileContainer>
      <StyledUserProfilePictureContainer>
        <Avatar name={username || ''} src={userImgUrl} size={'48px'} />
      </StyledUserProfilePictureContainer>
      <StyledUserProfileInfoContainer>
        <LabelMedium>{username}</LabelMedium>
        {usernameSubtitle ? (
          <ParagraphSmall marginTop="0" marginBottom="0">
            {usernameSubtitle}
          </ParagraphSmall>
        ) : null}
      </StyledUserProfileInfoContainer>
    </StyledUserProfileTileContainer>
  );
}
