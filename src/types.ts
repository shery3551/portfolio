/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
  techStack?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  location: string;
}
